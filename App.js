import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Componants/Home';
import Other from './Componants/Other';

import Profile from './Componants/Profile';
import Search from './Componants/Search';


const {Navigator,Screen} = createStackNavigator();

const Root = () =>(
   <Navigator>
      <Screen name ="Profile" component = {Profile} />
      <Screen name ="Search" component = {Search} />
  </Navigator>
)


export default function App() {

    return (
      <NavigationContainer>
          <Navigator
          screenOptions = {options => {
            return{
              headerStyle:{
                  backgroundColor: "orange"
              },
              title: options.route.name,
              headerLeft: null,
            }
          }}>
              <Screen name ="Bienvenue" component = {Home} />
              <Screen name ="Other page" component = {Other} />
              <Screen
              name ="Root" component = {Root}
               options = {(options) =>{
                // console.log('Options', options);
                 return{headerLeft: () =>(
                   <TouchableOpacity onPress= {() => options.navigation.pop()}>
                             <Text>retour</Text>
                   </TouchableOpacity>
                 )
                 }

               }}
              />
          </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
}
});
