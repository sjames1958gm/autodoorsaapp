import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { CardSection, Card } from './common';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from './common';
import Axios from 'axios';

const BASE_URL = 'http://192.168.1.6/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Touch Status to retrieve status from doors',
      error: ''
    };
  }

  onOpen() {
    this.setState({ error: '' });
    Axios.get(`${BASE_URL}open`)
      .then(({ data }) => this.setState({ status: data }))
      .catch(() => {
        this.setState({ error: 'Failed to communicate with doors' });
      });
  }

  onClose() {
    this.setState({ error: '' });
    Axios.get(`${BASE_URL}close`)
      .then(({ data }) => this.setState({ status: data }))
      .catch(() => {
        this.setState({ error: 'Failed to communicate with doors' });
      });
  }

  onStop() {
    this.setState({ error: '' });
    Axios.get(`${BASE_URL}stop`)
      .then(({ data }) => this.setState({ status: data }))
      .catch(() => {
        this.setState({ error: 'Failed to communicate with doors' });
      });
  }

  onHome() {
    this.setState({ error: '' });
    Axios.get(`${BASE_URL}home`)
      .then(({ data }) => this.setState({ status: data }))
      .catch(() => {
        this.setState({ error: 'Failed to communicate with doors' });
      });
  }

  onGetStatus() {
    this.setState({ error: '' });
    Axios.get(`${BASE_URL}status`)
      .then(({ data }) => this.setState({ status: data }))
      .catch(() => {
        this.setState({ error: 'Failed to communicate with doors' });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <CardSection>
          <Card>
            <Icon.Button
              text="Open"
              name="door-open"
              style={styles.iconButton}
              onPress={() => this.onOpen()}
            >
              <Text style={styles.buttonText}>Open</Text>
            </Icon.Button>
          </Card>
          <Card>
            <Icon.Button
              text="Close"
              name="door-closed"
              style={styles.iconButton}
              onPress={() => this.onClose()}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Icon.Button>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
            <Icon.Button
              text="Status"
              backgroundColor="grey"
              name="question-circle"
              style={styles.iconButton}
              onPress={() => this.onGetStatus()}
            >
              <Text style={styles.buttonText}>Status</Text>
            </Icon.Button>
          </Card>
          <Card>
            <Icon.Button
              text="Home"
              name="home"
              backgroundColor="green"
              style={styles.iconButton}
              onPress={() => this.onHome()}
            >
              <Text style={styles.buttonText}>Home</Text>
            </Icon.Button>
          </Card>
        </CardSection>
        <CardSection>
          <Card styles={styles.stopButtonContainer}>
            <Icon.Button
              name="hand-paper"
              text="Stop"
              backgroundColor="red"
              style={styles.stopButton}
              onPress={() => this.onStop()}
            >
              <Text style={styles.buttonText}>Stop</Text>
            </Icon.Button>
          </Card>
        </CardSection>
        <CardSection>
          <Text style={styles.status}>{this.state.status}</Text>
        </CardSection>
        {this.state.error ? (
          <CardSection>
            <Text style={styles.error}>{this.state.error}</Text>
          </CardSection>
        ) : null}
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
  status: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  buttonText: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center'
  },
  stopButtonContainer: {
    flex: 1
  },
  stopButton: {},
  iconButton: {},
  error: {
    color: 'red'
  }
});
