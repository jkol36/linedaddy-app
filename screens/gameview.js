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


import {Card, Title} from 'react-native-paper';

export default class GameView extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		return(
			<View style={styles.container}>
      <TouchableOpacity style={styles.button}> 
          <Card style={styles.card}>
  					<Card.Content>
              <Title style={styles.date}> 9/5</Title>
              <Title style={styles.time}> 8:20pm</Title>
              <Title style={styles.homeTeam}> Green Bay Packers</Title>
              <Title style={styles.awayTeam}> Chicago Bears</Title>
                    
            </Card.Content>
          </Card>
      </TouchableOpacity>
        <View style={styles.subCard}>
          <Text style={styles.spread}> Spread </Text>
          <Text style={styles.money}> Money </Text>
          <Text style={styles.total}> Total </Text>
          <Text style={styles.spreadValHome}> -7</Text>
          <Text style={styles.spreadValSecondaryHome}> -110</Text>
          <Text style={styles.moneyValHome}> -160 </Text>
          <Text style={styles.totalValHome}> O 45 </Text>
          <Text style={styles.spreadValAway}> -7</Text>
          <Text style={styles.spreadValSecondaryAway}> -110</Text>
          <Text style={styles.moneyValAway}> -160 </Text>
          <Text style={styles.totalValAway}> O 45 </Text>
          <Text style={styles.homeTeamSub}> Green Bay Packers</Text>
          <Text style={styles.awayTeamSub}> Chicago Bears</Text>
          <Button buttonStyle={styles.allMarkets} title='all markets >>'/>
        </View>
      
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
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    zIndex:-2
  },
  button: {
    marginTop:10,
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