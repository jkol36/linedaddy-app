
import React, { Component } from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    FlatList,
    TouchableOpacity,
    Dimensions,
    View,
    Text
   } from 'react-native'
import { Card, Title } from 'react-native-paper';

import { formatData } from '../helpers';
import moment from 'moment';



  

const numColumns = 1;
export default class Events extends Component {
  constructor(props) {
    super(props);
  }
  renderItem({item, index}) {
    const { home_team, away_team, venue, game_start, league } = item
    if(item.empty === true) {
      return <View style={[styles.itemInvisible, styles.item]} />
    }
    return (
      <TouchableOpacity>
        <Card style={styles.card}> 
          <Card.Content>
              <Title>{home_team.name} vs {away_team.name} ({league}) @ {venue.name}</Title>
              <Text> starts: {moment(game_start).fromNow()} </Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )

  }

  render() {
    return (
      <FlatList
        data={formatData(this.props.events, numColumns)}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    )
  }
}


const styles = StyleSheet.create({
    card: {
       paddingRight:20,
    },
    item: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // Approximate a sqaure
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        marginTop: 20
      },
    itemInvisible: {
      backgroundColor: 'transparent'
    }
})
