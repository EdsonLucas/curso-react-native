import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import './config/ReactotronConfig';
import Post from './components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777'
  },

  topoContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
  },

  topoTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    padding: 20,
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topoContainer}>
            <Text style={styles.topoTitle}>GoNative App</Text>
          </View>
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>
    );
  }
}
