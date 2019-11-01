import * as React from 'react';
import { Button, View, Text,FlatList,TouchableOpacity ,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  state = {
    data:[]
  };
  componentWillMount(){
    this.fetchData();
  }
  fetchData = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    this.setState({data: json,oldarray:json});
  };
  onPress(item) {
    this.props.navigation.navigate(
      'Details',
      { item }, 
    );
  }
  filterSearch(text){
    const newData = this.state.oldarray.filter(function(item){ 
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1  
    })
    this.setState({
      data: newData,
        text: text
    })
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
    
         <TextInput
          onChangeText={(text) => this.filterSearch(text)}
          value={this.state.text}
          />
        <FlatList
          data={this.state.data}
          keyExtractor={(x,i)=>i}
          renderItem={({item}) =>
          <TouchableOpacity onPress={() => this.onPress(item)}>
          <Text>
            {`${item.name}`}
          </Text>
          </TouchableOpacity>
        }
        />
      </View>
    );
  }
}
export default HomeScreen;