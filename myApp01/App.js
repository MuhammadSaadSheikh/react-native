import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isParaOpen, togglePara] = useState()
  const handlePara = () => {
    togglePara(!isParaOpen)
  }
  return (
    <View style={styles.container}>
      <Text onPress={handlePara}>
        {isParaOpen ? 'This is React Native App' : 'Hello World with React Native'}
      </Text>
      <Text>{}</Text>
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
