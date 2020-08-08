import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWrapper} onPress={()=>alert(1)}>Helo World 01</Text>
      <Text style={styles.textWrapper} onPress={()=>alert(2)}>Helo World 02</Text>
      <Text style={styles.textWrapper} onPress={()=>alert(3)}>Helo World 03</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  textWrapper:{
    width: 100,
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center', 
    marginBottom: 5,
    paddingTop: 25,
    borderWidth: 2,
    backgroundColor: 'yellow'
  }
});
