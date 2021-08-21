import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import colors from './lib/colors';

import InputScreen from './lib/screens/inputScreen';
import Constants from 'expo-constants';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.scaffoldBg,
    paddingTop:Constants.statusBarHeight
  },
});

export default App;