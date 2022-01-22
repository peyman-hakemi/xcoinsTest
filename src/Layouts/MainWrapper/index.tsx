import store from 'Data/Store';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

interface IProps {
  children: React.ReactNode;
}

function MainWrapper({children}: IProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>{children}</Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainWrapper;
