import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';

import StatusItem from './StatusItem';
import styles from './styles';

import { users } from '../../assets/fake_data';

export default class componentName extends Component {
    renderItem = ({ item }) => {
        return <StatusItem item={item} />;
    };
    renderHeader = () => {
        return (
            <View style={styles.headView}>
                <View style={styles.headSub}>
                    <Icon name="photo-camera" size={32} color="white" />
                    <View style={styles.absoluteView}>
                        <Icon name="add-circle" size={16} color="#0084ff" />
                    </View>
                </View>

                <Text style={styles.headText} numberOfLines={2}>
                    Add to your story
                </Text>
            </View>
        );
    };

    onWatchAll = () => {
        console.log('Pressed');
    };

    render() {
        let recent = users.results.slice(1, 25);
        return (
            <View>
                <View style={styles.listTopView}>
                    <Text style={styles.active}>Active</Text>
                    <TouchableRipple
                        onPress={this.onWatchAll}
                        rippleColor="rgba(0, 0, 0, .20)"
                    >
                        <Text style={styles.watchAll}>WATCH ALL</Text>
                    </TouchableRipple>
                </View>
                <FlatList
                    horizontal
                    data={recent}
                    renderItem={this.renderItem}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}
