
  
/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component, useState, useEffect } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  SafeAreaView, 
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions
 } from 'react-native';
import { 
  Appbar, 
  DefaultTheme, 
  Provider as PaperProvider, Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Sports from './screens/sports';
import Events from './screens/events';
import GameView from './screens/gameview';
import * as config from './config'
import * as firebase from 'firebase';
import '@firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';





const Stack = createStackNavigator({
  Sports: Sports,
  Events: Events
});
const dbh = firebase.firestore();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8937f2',
    accent: 'yellow',
  },
};



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      title: 'Events',
      categories: [{
        active: true,
        name: 'Events'
      },
      {
        active: false,
        name: 'Sports'
      }
    ],
    subCategories: [{
      active: true,
      name: '🔥Hot'
    },{
      active: false,
      name: '🔴Live'
    }, {
      active: false,
      name: '🌎All'
    }],
    sports: [],
    events: [],
    activeScreen: 'Sports',
    subTitle: 'Events'

    }
    this.updateSearch = this.updateSearch.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.filterSports = this.filterSports.bind(this);
  }

  componentDidMount() {
    const sports = [];
    const events = [];
    dbh.collection("sports").get().then(res => {
      res.forEach(doc => {
        sports.push(doc.data())
      })
      this.setState({sports})
    })
    dbh.collection('top events').get().then(res => {
      res.forEach(doc => {
        events.push(doc.data())
      })
        this.setState({events})
      })
    
    }

  updateSearch = search => {
    this.setState({ search });
  };

  filterEvents = () => {
    const regex = new RegExp(this.state.search, 'gi');
    let results = []
    this.state.events.forEach(item => {
      if (item.name.match(regex)) {
        results.push(item)
      }
      if(item.venue.name.match(regex)) {
        results.push(item)
      }
      else if (this.state.search.length === 0) {
        return this.state.events
      }

    })
    return results.filter((item, i) => results.indexOf(item) === i) //remove duplicate items
  }
  filterSports = () => {
    const regex = new RegExp(this.state.search, 'gi');
    let results = []
    if(this.state.sports.length > 0) {
      this.state.sports.forEach(item => {
        if(item.name !== undefined) {
          if (item.name.match(regex)) {
            results.push(item)
          }
        }
    else if (this.state.search.length === 0) {
      return this.state.sports
    }});
    return results.filter((item, i) => results.indexOf(item) === i); //remove duplicate items
    }
    else {
      return this.state.sports
    }
    
  }

  render() {
    const { search, categories, subCategories } = this.state;
    return (
          <PaperProvider theme={theme} settings={{icon: props => <Icon {...props} />}}>
            <Appbar style={{height:80}}>
              <TouchableOpacity onPress={() => this.setState({activeScreen:'Sports'})}><Text style={this.state.activeScreen === 'Sports' ? styles.buttonActive: styles.buttonInactive}>Sports</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({activeScreen:'Events'})}><Text style={this.state.activeScreen  === 'Events' ? styles.buttonActive: styles.buttonInactive}>Events</Text></TouchableOpacity>
            </Appbar>

              <SearchBar
                placeholder='games, events, or teams'
                containerStyle={{
                  backgroundColor:'#fff', 
                  borderBottomColor:'#fff', 
                  elevation:24
                }}
                onChangeText={this.updateSearch}
                inputContainerStyle={styles.innerSearchBar}
                searchIcon={<FontAwesomeIcon name='search' size={30}/>}
                round
                leftIconContainerStyle={{
                  marginLeft:10,
                }}
                placeholderTextColor={'black'}
                value={search}
              />
              <Card style={styles.iconContainer}>
              <TouchableOpacity>
                <MaterialCommunityIcon name='filter-outline' size={35} style={styles.filter}/>
              </TouchableOpacity>
              </Card>
              <GameView  />
              <Appbar style={{
                marginTop:-30
              }}>
                <Appbar.Action style={styles.action} icon='ios-home' />
                <Appbar.Action style={styles.action} icon='ios-search'/>
                <Appbar.Action style={styles.action} icon='ios-analytics'/>
                <Appbar.Action style={styles.action} icon='ios-calendar'/>
                <Appbar.Action icon='ios-menu'/>
              </Appbar>
          </PaperProvider>
    );
  }
}


const styles = StyleSheet.create({
  iconContainer: {
    borderBottomColor: '#ddd',
    marginLeft: 350,
    marginTop: -49,
    height: 44,
    paddingTop:5,
    paddingBottom:10,
    backgroundColor: '#fff',
    width: 50,

  },
  action: {
    marginLeft:40,
    marginRight:10,
  },
  filter: {
    width: 30,
    height: 30,
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1
  },
  buttonActive: {
    color:'white',
    marginTop: 30,
    width: 76,
    marginBottom: 10,
    marginRight:10,
    height: 31,
    fontSize: 26,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.52,
  },
  buttonInactive: {
    width: 76,
    height: 31,
    fontSize: 26,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.52,
    color: "rgba(255, 255, 255, 0.6)",
    marginTop:30,
    marginBottom:10,
    marginRight:10
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    paddingRight: 10,
    fontFamily: 'System',
  },

  innerSearchBar: {
    width: '80%',
    height: 38,
    borderRadius: 5,
    borderBottomColor: '#fff',
    backgroundColor:'#fff',
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 1,
      height: 2
  },

  },
  subHeading: {
    marginTop: 75,
    paddingLeft: 115,
    paddingRight: 115,
    marginLeft: -231.5,
    color: 'grey',
    fontFamily: 'System'
  },
  subHeadingPrimary: {
    marginTop: 75,
    paddingLeft: 115,
    paddingRight: 115,
    marginLeft: -253.5,
    color: 'white',
    fontFamily: 'System'
  },
  headerTextFaded: {
    color: 'grey',
    fontSize: 20,
    fontFamily: 'System'
  },
  top: {
    position: 'absolute',
    height: 150,
    width: 2000

  },

});