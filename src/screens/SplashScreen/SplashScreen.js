import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-paper';
import styles from './styles';
import PropTypes from 'prop-types';

export default class SplashScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MainScreen');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button raised color="#0084ff" onPress={this.onPress}>
                    CONTINUE AS USER
                </Button>
            </SafeAreaView>
        );
    }
}

SplashScreen.propTypes = {
    navigation: PropTypes.object
};
