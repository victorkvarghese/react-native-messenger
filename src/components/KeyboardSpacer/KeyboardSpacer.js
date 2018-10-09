/* Used to manage keyboard spacing
 * NOTE: takes variance as optional prop to vary keyboard height if wanted.
 * View expands based on keyboard height.
 */
import React, { Component } from 'react';
import { Keyboard, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class KeyboardSpacer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            keyboardHeight: 0
        };
        this.imageHeight = new Animated.Value(0);
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardWillShow',
            this.keyboardWillShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardWillHide',
            this.keyboardWillHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = e => {
        Animated.timing(this.imageHeight, {
            duration: 240,
            toValue: e.endCoordinates.height
        }).start();
    };

    keyboardWillHide = () => {
        Animated.timing(this.imageHeight, {
            duration: 240,
            toValue: 0
        }).start();
    };

    render() {
        return (
            <Animated.View
                style={[
                    styles.wrapper,
                    { width: this.imageHeight, height: this.imageHeight }
                ]}
            />
        );
    }
}

KeyboardSpacer.propTypes = {
    variance: PropTypes.number
};

KeyboardSpacer.defaultProps = {
    variance: 0
};
