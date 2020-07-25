import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// pages
import Home from './containers/Home'
import Add from './containers/Add'
import Settings from './containers/Settings'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
                screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch(route.name) {
              case 'Home':
                iconName = 'ios-calendar';
                break;
              case 'Add':å
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
                break;
              case 'Settings':
                iconName = 'ios-settings';
                break;
              default:
                iconName = 'ios-missing';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: 'Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}