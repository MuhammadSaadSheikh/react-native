import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Button, TouchableHighlight, ImageBackground,
  ScrollView, ActivityIndicator, Image
} from 'react-native';
import {styler} from './style'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Helo World</Text>
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
