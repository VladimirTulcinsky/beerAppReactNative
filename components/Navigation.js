import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from './Home';
import AddBeer from './AddBeer';
import MapBeer from './MapBeer';
import TakePicture from './TakePicture';
import Details from './Details';
import { Icon } from 'react-native-elements';


export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => {
        return <Icon name='ios-home' color="#ffffff" type='ionicon' />
      }
    }
  },
  AddBeer: {
    screen: AddBeer,
    navigationOptions: {
      tabBarIcon: () => {
        return <Icon name='ios-add-circle' color="#ffffff" type='ionicon' />
      }
    }
  },
  MapBeer: {
    screen: MapBeer,
    navigationOptions: {
      tabBarIcon: () => {
        return <Icon name='md-globe' color="#ffffff" type='ionicon' />
      }
    }
  }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "#a2273c",
        borderTopWidth: 1,
        borderColor: "#3f101c"
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#FFF'
      }
    }
  });

export const Navigation = StackNavigator({
  Tabs: { screen: Tabs },
  AddBeer: { screen: AddBeer, },
  TakePicture: { screen: TakePicture, },
  Details: { screen: Details },
}, {
    navigationOptions: {
      headerTitle: () => {
        return <View style={{ flex: 1, alignSelf: 'center' }}><Icon name='md-beer' color="#ffffff" type='ionicon' /></View>
      },
      headerStyle: {
        backgroundColor: '#a2273c',
        height: 60,
        paddingTop: 10,
        shadowColor: 'grey',
        shadowOffset: {
          width: 2,
          height: 2
        },
      },
    },
  }
);





