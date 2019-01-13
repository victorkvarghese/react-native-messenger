import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-paper';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import styles from './styles';
import PropTypes from 'prop-types';

export default class SplashScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MainScreen');
    };

    initUser = token => {
        fetch(
            'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
                token
        )
            .then(response => response.json())
            .then(json => {
                // Some user object has been set up somewhere, build that user here
                const user = {};
                user.name = json.name;
                user.id = json.id;
                user.user_friends = json.friends;
                user.email = json.email;
                user.username = json.name;
                user.loading = false;
                user.loggedIn = true;
                // user.avatar = setAvatar(json.id);
                console.log('USer: ', user);
            })
            .catch(() => {
                reject('ERROR GETTING DATA FROM FACEBOOK');
            });
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Button raised color="#0084ff" onPress={this.onPress}>
                    CONTINUE AS USER
                </Button>
                {/* <LoginButton
                    readPermissions={['public_profile', 'email']}
                    onLoginFinished={(error, result) => {
                        if (error) {
                            console.log('login has error: ' + result.error);
                        } else if (result.isCancelled) {
                            console.log('login is cancelled.');
                        } else {
                            AccessToken.getCurrentAccessToken().then(data => {
                                console.log('DAtadsdsd :', data);

                                console.log(data.accessToken.toString());
                                this.initUser(data.accessToken.toString());
                                this.onPress();
                            });
                        }
                    }}
                    onLogoutFinished={() => console.log('logout.')}
                /> */}
            </SafeAreaView>
        );
    }
}

SplashScreen.propTypes = {
    navigation: PropTypes.object
};
