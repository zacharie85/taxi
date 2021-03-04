import React ,{useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

const OtherSrenn = props =>{

//  useEffect(() => {
  //  console.log('nom', props.route.params.nom);
  //  console.log('age', props.route.params.age);
//  },[]);

const goTo = () =>{
props.navigation.push("Root",{
  params:{},
  screen: "Profile"
});
}

  return(
    <View style={styles.container}>
      <Text>Other Screnn Bonjour !! </Text>
        <TouchableOpacity onPress = {goTo}>
            <View  style = {styles.button}>
                  <Text>Aller a Profile / Searsh!! </Text>
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
  width: 200,
}
});

export default OtherSrenn;
