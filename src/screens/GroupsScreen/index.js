import React, { Component } from 'react';
import { View } from 'react-native';

import GroupsList from 'src/components/GroupsList';
import styles from './styles';

export default class GroupsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GroupsList />
            </View>
        );
    }
}
