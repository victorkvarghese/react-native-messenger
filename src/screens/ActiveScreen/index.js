import React, { Component } from 'react';
import { View } from 'react-native';

import ActiveList from 'src/components/ActiveList';
import styles from './styles';

export default class ActiveScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActiveList />
            </View>
        );
    }
}
