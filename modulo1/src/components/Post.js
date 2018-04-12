import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
  },

  postTitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },

  postAutor: {
    fontSize: 14,
    color: '#999999',
    paddingBottom: 10,
  },

  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  postDescription: {
    color: '#666666',
    paddingTop: 10,
  },
});

const Post = () => (
  <View style={styles.postContainer}>
    <Text style={styles.postTitle}>Aprendendo React Native</Text>
    <Text style={styles.postAutor}>Diego Schell Fernandes</Text>
    <View style={styles.hr} />
    <Text style={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
  </View>
);

export default Post;
