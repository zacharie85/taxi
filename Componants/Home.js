import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

const HomeScreen = props =>{

const goTo = () =>{
console.log("props",props );
props.navigation.navigate("Other page",{

  nom:"Yvan",
  age:15
});
}

  return(

          <View style = {styles.container}>
            <Text>Home Screnn Bonjour !! </Text>
              <TouchableOpacity onPress = {goTo}>
                  <View  style = {styles.button}>
                        <Text>Aller a other !! </Text>
                  </View>
              </TouchableOpacity>
          </View>

  );
}

const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
},
button:{
  backgroundColor: 'lightblue',
  borderColor: 'darkblue',
  borderWidth: 3,
  justifyContent: "center",
  alignItems: "center",
  width: 150,
}
});


export default HomeScreen;
