//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState } from 'react-native';
import BackgroundService from './backgroundService';

BackgroundService.registerNewPostsListener();

// create a component
class MyApp extends Component {
    componentWillMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    handleAppStateChange(newState) {
        if (newState === 'active') {
            BackgroundService.stopNewPostsListener();
        } else if (newState === 'background') {
            BackgroundService.startNewPostsListener({key: '!!!!!!!'});
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>MyApp</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyApp;
