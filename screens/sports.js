
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


  

const numColumns = 3;
export default class Sports extends React.Component {
  constructor(props) {
    super(props);
  }
  renderItem({item, index}) {
    console.log('rendering item', item)
    const { uri, name } = item
    if(item.empty === true) {
      return <View style={[styles.itemInvisible, styles.item]} />
    }
    return (
      <TouchableOpacity>
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
