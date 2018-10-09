import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';
import _ from 'lodash';
import Avatar from '../Avatar';
import Images from 'src/config/images';
import styles from './styles';
import PropTypes from 'prop-types';

export default class UserItem extends Component {
    shouldComponentUpdate(nextProps) {
        if (_.isEqual(this.props.item, nextProps.item)) {
            return false;
        }
        return true;
    }

    onPress = () => {
        alert('Clicked ');
    };

    render() {
        const { name, picture } = this.props.item;
        return (
            <TouchableRipple
                onPress={this.onPress}
                rippleColor="rgba(0, 0, 0, .20)"
            >
                <View style={styles.item}>
                    <Avatar uri={picture.thumbnail} enableDot />
                    <Text style={styles.userName}>
                        {name.first[0].toUpperCase() +
                            name.first.slice(1) +
                            ' ' +
                            name.last[0].toUpperCase() +
                            name.last.slice(1)}
                    </Text>
                    <Image style={styles.wave} source={Images.profile.wave} />
                </View>
            </TouchableRipple>
        );
    }
}

UserItem.propTypes = {
    item: PropTypes.object
};
