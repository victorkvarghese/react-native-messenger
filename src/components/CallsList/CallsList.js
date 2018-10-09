import React, { Component } from 'react';
import { SectionList, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CallItem from './CallItem';
import AppStyles from 'src/config/styles';

import { users } from '../../assets/fake_data';
import styles from './styles';

export default class CallsList extends Component {
    renderItem = ({ item }) => {
        return <CallItem item={item} />;
    };

    onPress = () => {
        console.log('Pressed!');
    };

    renderSectionHeader = ({ section: { title } }) => {
        return (
            <View style={styles.hView}>
                <Text style={styles.header}>{title}</Text>
            </View>
        );
    };

    renderHeader = () => {
        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <View style={styles.groupView}>
                    <Icon
                        size={28}
                        style={styles.grpIcn}
                        color={AppStyles.colors.accentColor}
                        name="supervisor-account"
                    />

                    <Text style={styles.grpText}>Start Group Call</Text>
                </View>
            </TouchableRipple>
        );
    };

    render() {
        let recent = users.results.slice(31, 33);
        let suggested = users.results.slice(1, 30);

        const data = [
            { title: 'Recent', data: recent },
            { title: 'Suggested', data: suggested }
        ];

        return (
            <SectionList
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                sections={data}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={this.renderHeader}
            />
        );
    }
}
