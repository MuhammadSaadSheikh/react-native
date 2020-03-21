import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Button, TouchableHighlight, ImageBackground,
  ScrollView, ActivityIndicator, Image
} from 'react-native';
import {styler} from './style'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('./assets/x-men.jpg')} style={styler.img}> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <TouchableOpacity onPress={()=>alert('hello')} style={styler.btn}>
          <Text>New Button</Text>
        </TouchableOpacity> */}
        {/* <Button onPress={() => alert('hey!')} title='Say hi' colr='green'></Button> */}
        {/* <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight> */}
        <View style={styler.scrlWrapper}>
          <ScrollView contentContainerStyle={styler.scrl}>
        <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight>
                <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight>
                <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight>
                <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight>
                <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight>
                <TouchableHighlight onPress={()=>alert('hello yar')} style={styler.hightLight}>
          <Text style={styler.txtSize}>Work</Text>
        </TouchableHighlight>
          </ScrollView>
      </View>
        <TouchableOpacity onPress={() => alert("avengers")}>
          <Image
            source={require("./assets/x-men.jpg")}
            style={styler.img}
          />
        </TouchableOpacity>
      <ActivityIndicator />
      {/* </ImageBackground> */}
    </View>
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
