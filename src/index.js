import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import api from './services/api';
import axios from 'axios';

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.15.114:3333/repositories')
      .then((response) => setResult(response.data));
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>List of repositories</Text>
          {result.map((data) => (
            <Text key={data.id}> {data.title}</Text>
          ))}
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
