/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
  
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
      
  },
}
);

export default createAppContainer(AppNavigator);
