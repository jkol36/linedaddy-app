
import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    FlatList,
    TouchableOpacity,
    Dimensions,
    View
   } from 'react-native'
import { Card, Title } from 'react-native-paper';

import { formatData } from '../helpers';

/* const sports = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Soccer',
      uri: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f82',
      title: 'Basketball',
      uri: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d81',
      title: 'Baseball',
      uri: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d80',
      title: 'Tennis',
      uri: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'Football',
      uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'Basketball',
      uri: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Hockey',
      uri: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Cricket',
      uri: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'E-Sports',
      uri: 'https://images.unsplash.com/photo-1548686304-89d188a80029?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Golf',
      uri: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
  
  ]; */
  

const numColumns = 3;
export default class Sports extends React.Component {
  constructor(props) {
    super(props);
  }
  renderItem({item, index}) {
    const { uri, name } = item
    if(item.empty === true) {
      return <View key={index} style={[styles.itemInvisible, styles.item]} />
    }
    return (
      <TouchableOpacity key={index}>
        <Card style={styles.card}> 
        <Card.Cover source={{ uri }} />
          <Card.Content>
              <Title>{name}</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )

  }

  render() {
    return (
      <FlatList
        data={formatData(this.props.sports, numColumns)}
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
