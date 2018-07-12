import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '@components/Avatar';
import styles from './styles';

export default class MessagesScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('CameraScreen');
    };

    render() {
        return (
            <View style={[styles.container]}>
                <Text> MessagesScreen </Text>
                <Avatar />
                <TouchableOpacity onPress={this.onPress}>
                    <Text>Go to CameraScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

MessagesScreen.propTypes = {
    navigation: PropTypes.object
};
