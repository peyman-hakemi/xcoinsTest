import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default App;
