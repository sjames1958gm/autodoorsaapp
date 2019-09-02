/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button, CardSection } from './common';
import Axios from 'axios';

const BASE_URL = 'http://192.168.1.6/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'initial state' };
  }

  onOpen() {
    Axios.get(`${BASE_URL}open`);
  }

  onClose() {
    Axios.get(`${BASE_URL}close`);
  }

  onGetStatus() {
    Axios.get(`${BASE_URL}status`).then(({ data }) =>
      this.setState({ status: data })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <CardSection>
          <Button onPress={() => this.onOpen()}>Open</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onClose()}>Close</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onGetStatus()}>Get Status</Button>
        </CardSection>
        <CardSection>
          <Text>{this.state.status}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
