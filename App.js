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
  TouchableOpacity
 } from 'react-native';
import { 
  Appbar, 
  DefaultTheme, 
  Provider as PaperProvider, Card } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sports from './screens/sports';
import Events from './screens/events';
import GameView from './screens/gameview';
import * as config from './config'
import * as firebase from 'firebase';
import '@firebase/firestore';





const dbh = firebase.firestore();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8937f2',
    accent: 'yellow',
  },
};


const ContentTitle = ({ title, style }) => (
  <Appbar.Content
    title={<Text style={style}> {title} </Text>}
    style={{ alignItems: 'center' }}
  />
);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      title: 'NFL WEEK 1',
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
    sports: []



    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    console.log('running');
    const sports = []
    dbh.collection("sports").get().then(res => {
      res.forEach(doc => {
        console.log(doc.data())
        sports.push(doc.data())
      })
      this.setState({sports})
    })
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    console.log('rendeer', this.state.sports)
    const { search, categories, subCategories } = this.state
    return (
      <PaperProvider theme={theme}>
        <Appbar style={{elevation: 24, height:90, alignItems:'center'}}>
          <Appbar.Content
            title={this.state.title}
            subtitle={<React.Fragment>
                <Text style={{color:'white', fontFamily:'System'}}> 🏈 Games</Text>
                <Text> 🔴 Live </Text>
            </React.Fragment>}
            titleStyle={{marginTop:30}}
            subtitleStyle={{marginRight: 100, width: 300}}
          />
        </Appbar>

          <SearchBar
            placeholder='games, events, or teams'
            containerStyle={styles.search}
            onChangeText={this.updateSearch}
            inputContainerStyle={styles.innerSearchBar}
            searchIcon
            placeholderTextColor={'black'}
            value={search}
          />
          <Card style={styles.iconContainer}>
            <Icon name='filter' size={40} color={'#ddd'}/>
          </Card>
  
          <Sports sports={this.state.sports} />
      </PaperProvider>
    );
  }
}


const styles = StyleSheet.create({
  iconContainer: {
    borderBottomColor: '#ddd',
    marginLeft: 350,
    marginTop: -55,
    backgroundColor: '#fff',
    width: 50,
    paddingTop: 10,
    paddingBottom: 10

  },
  headerText: {
    color: 'white',
    fontSize: 20,
    paddingRight: 10,
    fontFamily: 'System',
  },
  search: {
    width: '80%',
    backgroundColor: 'white',
  },
  innerSearchBar: {
    backgroundColor: 'white'
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
