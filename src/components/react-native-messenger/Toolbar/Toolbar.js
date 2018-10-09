import React, { Component } from 'react';
import { Platform, Image, StatusBar } from 'react-native';
import { Appbar, withTheme } from 'react-native-paper';
import styles from './styles';
import PropTypes from 'prop-types';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 32 : StatusBar.currentHeight;

class Toolbar extends Component {
    componentDidMount() {
        if (Platform.OS === 'android') {
            StatusBar.setBarStyle('light-content');
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('rgba(0,0,0,0.26)');
        }
    }
    render() {
        const { onBackPress, theme } = this.props;
        const { fonts } = theme;

        return (
            <Appbar.Header statusBarHeight={STATUS_BAR_HEIGHT}>
                <Appbar.BackAction onPress={onBackPress} />
                <Image
                    source={{
                        uri:
                            'https://randomuser.me/api/portraits/med/men/21.jpg'
                    }}
                    style={styles.avatar}
                />
                <Appbar.Content
                    title="Denny"
                    titleStyle={[
                        styles.titleStyle,
                        {
                            fontFamily: fonts.regular
                        }
                    ]}
                    subtitleStyle={[
                        styles.subtitleStyle,
                        {
                            fontFamily: fonts.light
                        }
                    ]}
                    subtitle={'Active 32 minutes ago'}
                />

                <Appbar.Action icon="call" onPress={() => {}} />
                <Appbar.Action icon="videocam" onPress={() => {}} />
                <Appbar.Action icon="error-outline" onPress={() => {}} />
            </Appbar.Header>
        );
    }
}

Toolbar.propTypes = {
    onBackPress: PropTypes.func,
    theme: PropTypes.object
};

export default withTheme(Toolbar);
