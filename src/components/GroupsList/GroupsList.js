import React, { Component } from 'react';
import { FlatList } from 'react-native';
import GroupsItem from './GroupItem';
import styles from './styles';

const data = [
    {
        name: 'React Native Community',
        last_active: '15 days ago',
        members: 'Vicky, Alex Jacob, Bob, William + 320'
    },
    {
        name: 'Android Developers Forum',
        last_active: '30 days ago',
        members: 'Vicky, Alex, Bob, William + 256'
    },
    {
        name: 'iOs Developers',
        last_active: '30 days ago',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400'
    },
    {
        name: 'Buddies',
        last_active: '10 days ago',
        members: 'Vicky, Alex, Bob, William + 356'
    },
    {
        name: 'Birthday Celebration',
        last_active: '5 days ago',
        members: 'Tom Alex, Jacob Samuel, Sam, +12'
    },
    {
        name: 'College Buddies',
        last_active: '24 days ago',
        members: 'Vicky, Alex, Bob, William + 10'
    },
    {
        name: 'Memories',
        last_active: '1 day ago',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2'
    },
    {
        name: 'Secret Group',
        last_active: '28 days ago',
        members: 'Tom Alex,Jacob Mathews,Sam Tony'
    }
];

export default class GroupsList extends Component {
    renderItem = ({ item }) => {
        return <GroupsItem item={item} />;
    };

    render() {
        return (
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
            />
        );
    }
}
