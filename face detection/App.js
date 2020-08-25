import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TouchableHighlight, ImageBackground } from 'react-native';

//style
import { styler } from './style'

export default function App() {
  const [isParaOpen, togglePara] = useState()
  const handlePara = () => {
    togglePara(!isParaOpen)
  }
  return (
    // <ImageBackground source={require('./assets/logo.png')} style={styler.bgImg}>
    <View style={styles.container}>
      <Text onPress={handlePara}>
        {isParaOpen ? 'This is React Native App' : 'Hello World with React Native'}
      </Text>

      <TouchableOpacity onPress={() => alert('ya to hoga')} style={styler.btn}>
        <Text style={styler.text}>New Button</Text>
      </TouchableOpacity>

      <Button style={styler.btn} title='Hay' onPress={() => alert('ya to kesi kittab my nh likha!')} />
      
      <TouchableHighlight onPress={() => alert('Nepal my tibet my...')}>
        <Text>Laddan Jaffri</Text>
      </TouchableHighlight>
    
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
