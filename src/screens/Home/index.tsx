import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotesApp from '../NotesApp';
import DetailsScreen from '../DetailsScreen';
import Add from '../../assets/icons/add.svg';
import Notes from '../../assets/icons/notes.svg';
import { CustomTabBar } from '../../Components';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        // tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
        }}>
        <Tab.Screen
          name="Notes"
          component={NotesApp}
          options={{
            tabBarActiveTintColor: '#1C274C',
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View>
                  <Add height={25} width={25} />
                </View>
              ) : (
                <View>
                  <Add height={25} width={25} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarActiveTintColor: '#1C274C',
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View>
                  <Notes height={25} width={25} />
                </View>
              ) : (
                <View>
                  <Notes height={25} width={25} />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
