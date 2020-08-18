import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet, View} from 'react-native';
import api from './services/api';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>List of repositories</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
