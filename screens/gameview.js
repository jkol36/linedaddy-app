import React, { Component } from 'react';
import {
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Dimensions,
	View,
	Text
} from 'react-native';
import { Button } from 'react-native-elements';
import * as Amplitude from 'expo-analytics-amplitude';
import {Card, Title} from 'react-native-paper';

const data = [
  {
    date: '9/5',
    time: '8:20pm',
    homeTeam: 'Philadelphia Eagles',
    awayTeam: 'New York Giants',
    id:1,
    markets: {
      spreadValHome: 4,
      spreadValAway: 3
    },
  },
  {
    date: '9/4',
    time: '7:20pm',
    homeTeam: 'Philadelphia Eagles',
    awayTeam: 'New York Giants',
    id:2
  },
  {
    date: '9/3',
    time: '6:20pm',
    homeTeam: 'San Francisco 49ers',
    awayTeam: 'Seattle Seahawks',
    id:3
  }
]
const SubCard = ({
  spreadValHome, 
  spreadValSecondaryHome, 
  moneyValHome, 
  totalValHome, 
  spreadValAway,
  spreadValSecondaryAway,
  moneyValAway,
  totalValAway,
  homeTeamSub,
  awayTeamSub
}) => {
  return (
    <View style={styles.subCard}>
      <Text style={styles.spread}>Spread</Text>
      <Text style={styles.money}>Money</Text>
      <Text style={styles.total}>Total</Text>
      <Text style={styles.spreadValHome}>{spreadValHome}</Text>
      <Text style={styles.spreadValSecondaryHome}>{spreadValSecondaryHome}</Text>
      <Text style={styles.moneyValHome}>{moneyValHome}</Text>
      <Text style={styles.totalValHome}>{totalValHome}</Text>
      <Text style={styles.spreadValAway}>{spreadValAway}</Text>
      <Text style={styles.spreadValSecondaryAway}>{spreadValSecondaryAway}</Text>
      <Text style={styles.moneyValAway}>{moneyValAway}</Text>
      <Text style={styles.totalValAway}>{totalValAway}</Text>
      <Text style={styles.homeTeamSub}>{ homeTeamSub }</Text>
      <Text style={styles.awayTeamSub}>{awayTeamSub}</Text>
      <Button buttonStyle={styles.allMarkets} title='all markets >>'/>
    </View>
  )
}

const GameCard = ({
  date,
  time,
  homeTeam,
  awayTeam,
  showCardActive,
  onSelect,
  id,
  activeCardDetails,
  spreadValHome,
  spreadValAway,
  children
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onSelect(id)} style={styles.button}> 
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.date}>{date}</Title>
              <Title style={styles.time}>{time}</Title>
              <Title style={styles.homeTeam}>{homeTeam}</Title>
              <Title style={styles.awayTeam}>{awayTeam}</Title>
            </Card.Content>
          </Card>
      </TouchableOpacity>
      {children}
    </View>
  )
}
export default class GameView extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
      showCardActive: true,
      selected: new Map(),
    };
	}
  componentDidMount() {
    Amplitude.logEvent('user viewed the gameview component')
  }

  onSelected = (id) => {
    console.log('onSelected called with', id)
    this.setState({selected:this.state.selected.set(id, !this.state.selected.get(id))})
  }
  
	render() {
		return(
			<View style={styles.container}>
        <FlatList 
          data={data}
          renderItem={({item}) => (
            <GameCard 
              id={item.id}
              homeTeam={item.homeTeam}
              awayTeam={item.awayTeam}
              date={item.date}
              time={item.time}
              showCard={this.state.selected[item.id]}
              onSelect={this.onSelected}
            >
            {this.state.selected.get(item.id) === true ? <SubCard />:null}
            </GameCard>
          )}
          extraData={this.state}
          />
          
			</View>

		)
	}
}

const styles = StyleSheet.create({
  allMarkets: {
    borderRadius: 10,
    marginTop:30,
    backgroundColor: "#680cdd"
  },
  container: {
    height: Dimensions.get('window').height / 1.29,
    marginLeft: 30,
  },
  date: {
    marginLeft: Dimensions.get('window').width / 2,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#262626" 
  },
  
  time: {
    marginLeft: Dimensions.get('window').width / 2,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#262626"
  },
  homeTeam: {
    marginTop: -66,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.36,
    color: "#262626"
  },
  homeTeamSub: {
    fontSize: 14,
    marginTop: -40,
    paddingBottom: 10,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.28,
    color: "#262626"
  },
  awayTeamSub: {
    fontSize: 18,
    marginTop: -10,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.36,
    color: "#262626"
  },
  awayTeam: {
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.36,
    color: "#262626"
  },
  card: {
    marginTop:10,
    flex:1,
    width: 343,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1

  },
  subCard: {
    width: 341,
    height: 119,
    flex:1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  button: {
    marginTop:10,
  },
  buttonShowCardActive: {
    marginTop:10,
    marginBottom:10
  },
  spread: {
    marginLeft: Dimensions.get('window').width / 3,
    width: 46,
    height: 14,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.24,
    color: "#262626"
  },
  spreadValHome: {
    marginLeft: Dimensions.get('window').width / 3,
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#000000"
  },
  spreadValSecondaryHome: {
    marginLeft: Dimensions.get('window').width / 2.65,
    marginTop: -17,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.24,
    color: "#000000"
  },
  spreadValSecondaryAway: {
    marginLeft: Dimensions.get('window').width / 2.65,
    marginTop: -17,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.24,
    color: "#000000"
  },
  spreadValAway: {
    marginLeft: Dimensions.get('window').width / 3,
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#000000"
  },
  money: {
    marginLeft: Dimensions.get('window').width / 2,
    marginTop:-13,
    width: 43,
    height: 14,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.24,
    color: "#262626"

  },
  moneyValHome: {
    fontSize: 16,
    marginLeft: Dimensions.get('window').width / 2,
    marginTop: -15,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#000000"
  },
  moneyValAway: {
    fontSize: 16,
    marginLeft: Dimensions.get('window').width / 2,
    marginTop: -15,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#000000"
  },
  total: {
    marginLeft: Dimensions.get('window').width / 1.5,
    marginTop:-13,
    textAlign: 'center',
    width: 37,
    height: 14,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.24,
    color: "#262626"
  },
  totalValHome: {
    marginLeft: Dimensions.get('window').width / 1.5,
    marginTop: -20,
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#000000",
  },
  totalValAway: {
    marginLeft: Dimensions.get('window').width / 1.5,
    marginTop: -20,
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    color: "#000000",
  },

})