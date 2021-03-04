/* @flow */

import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

const ProfileSrenn = props =>{

  return(
    <View style={styles.container}>
      <Text>Profile Screnn Bonjour !! </Text>
    </View>
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

export default ProfileSrenn;
