import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from './Home';
import AddBeer from './AddBeer';
import MapBeer from './MapBeer';
import TakePicture from './TakePicture'
import { Icon } from 'react-native-elements';

export const Navigation = StackNavigator({
  AddBeer: { screen: AddBeer, },
  TakePicture: { screen: TakePicture, },
});


export const Tabs = TabNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => {
        return <Icon name='ios-home' type='ionicon' />
      }
    }
  },
  AddBeer: {
    screen: Navigation,
    navigationOptions: {
      tabBarIcon: () => {
        return <Icon name='ios-add-circle' type='ionicon' />
      }
    }
  },
  MapBeer: {
    screen: MapBeer,
    navigationOptions: {
      tabBarIcon: () => {
        return <Icon name='md-globe' type='ionicon' />
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

