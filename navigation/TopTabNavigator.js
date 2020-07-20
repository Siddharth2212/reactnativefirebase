import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Icon} from "react-native-elements"

function SettingsScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Welcome {props.user.phoneNumber}!</Text> */}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ 
          showIcon: true, 
          tabBarLabel: 'Contacts', 
          tabBarIcon: ({ tintColor }) => (
            //Your icon component for example => 
            <Icon name="phone" size={30} color="red" />
          ) }
        } />
        <Tab.Screen name="Calls" component={SettingsScreen} />
      </Tab.Navigator>
  );
}
