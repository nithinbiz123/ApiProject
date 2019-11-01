import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class DetailsScreen extends React.Component {
    render() {
      
      // const { params } = this.props.navigation.state;
      // this.setState({data: params});
    return (
      <View>
        <Text>Name: {this.props.navigation.state.params.item.name}</Text>
        <Text>Email: {this.props.navigation.state.params.item.email}</Text>
      </View>
    );
      // return (
      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Details Screen</Text>
      //     <Button
      //       title="Go to Details... again"
      //       onPress={() => this.props.navigation.push('Details')}
      //     />
      //     <Button
      //       title="Go to Home"
      //       onPress={() => this.props.navigation.navigate('Home')}
      //     />
      //     <Button
      //       title="Go back"
      //       onPress={() => this.props.navigation.goBack()}
      //     />
      //   </View>
      // );
    }
  }
  export default DetailsScreen;