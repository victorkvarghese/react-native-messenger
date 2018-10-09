import React, { Component } from 'react';
import { View } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../Avatar/Avatar';
import AppStyles from 'src/config/styles';
import PropTypes from 'prop-types';

import styles from './styles';

export default class CallItem extends Component {
    onPress = () => {
        console.log('Pressed');
    };
    render() {
        const { name, picture, login } = this.props.item;

        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View style={styles.item}>
                    <Avatar uri={picture.thumbnail} />
                    <View style={styles.nameView}>
                        <Text style={styles.head}>
                            {name.first[0].toUpperCase() +
                                name.first.slice(1) +
                                ' ' +
                                name.last[0].toUpperCase() +
                                name.last.slice(1)}
                        </Text>
                        <Text style={styles.sub}>@{login.username}</Text>
                    </View>
                    <TouchableRipple
                        onPress={this.onPress}
                        style={styles.icon}
                        rippleColor="rgba(0, 0, 0, .32)"
                    >
                        <Icon
                            size={24}
                            color={AppStyles.colors.accentColor}
                            name="call"
                        />
                    </TouchableRipple>
                    <TouchableRipple
                        onPress={this.onPress}
                        style={styles.icon}
                        rippleColor="rgba(0, 0, 0, .32)"
                    >
                        <Icon
                            size={24}
                            color={AppStyles.colors.accentColor}
                            name="videocam"
                        />
                    </TouchableRipple>
                </View>
            </TouchableRipple>
        );
    }
}

CallItem.propTypes = {
    name: PropTypes.object,
    picture: PropTypes.object,
    login: PropTypes.object,
    item: PropTypes.object
};
