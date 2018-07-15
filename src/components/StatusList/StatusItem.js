import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import styles from './styles';
export default class StatusItem extends Component {
    render() {
        const { name, picture } = this.props.item;

        const formattedName =
            name.first[0].toUpperCase() + name.first.slice(1, 6);
        return (
            <View style={styles.itemView}>
                <Avatar uri={picture.thumbnail} />
                <View style={styles.nameView}>
                    <View style={styles.onlineDot} />
                    <Text style={styles.nameText}>{formattedName}</Text>
                </View>
            </View>
        );
    }
}

StatusItem.propTypes = {
    name: PropTypes.object,
    picture: PropTypes.object,

    item: PropTypes.object
};
