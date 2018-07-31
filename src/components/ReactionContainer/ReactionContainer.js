import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card } from 'react-native-paper';

import Reaction from './Reaction';
import styles from './styles';
export default class ReactionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.types = [
            { key: '1', type: 'Laugh' },
            { key: '2', type: 'Wow' },
            { key: '3', type: 'Angry' },
            { key: '4', type: 'Laugh' },
            { key: '5', type: 'Wow' },
            { key: '6', type: 'Angry' }
        ];
    }

    renderItem = ({ item, index }) => {
        return <Reaction type={item.type} index={index} />;
    };

    render() {
        return (
            <Card style={styles.card}>
                <FlatList
                    data={this.types}
                    horizontal
                    renderItem={this.renderItem}
                    keyExtractor={item => item.key}
                    bounces={false}
                    style={styles.list}
                />
            </Card>
        );
    }
}
