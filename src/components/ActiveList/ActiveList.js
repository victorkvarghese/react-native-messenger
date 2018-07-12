import React, { Component } from 'react';
import { FlatList } from 'react-native';
import UserItem from './UserItem';

import { users } from '../../assets/fake_data';

export default class ActiveList extends Component {
    renderItem = ({ item }) => {
        return <UserItem item={item} />;
    };

    render() {
        return (
            <FlatList
                data={users.results}
                renderItem={this.renderItem}
                keyExtractor={item => item.login.uuid}
            />
        );
    }
}
