import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import Avatar from '../Avatar';
import styles from './styles';
import PropTypes from 'prop-types';

export default class GroupItem extends Component {
    onPress = () => {
        alert('Pressed');
    };
    render() {
        const { item } = this.props;
        return (
            <Card style={styles.card} onPress={this.onPress}>
                <View style={styles.cardView}>
                    <View style={styles.nameView}>
                        <Avatar large isGroup />
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.last}>
                            Active {item.last_active}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text numberOflines={2} style={styles.members}>
                            {item.members}
                        </Text>
                    </View>
                </View>
            </Card>
        );
    }
}

GroupItem.propTypes = {
    item: PropTypes.object
};
