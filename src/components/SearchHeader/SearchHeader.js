import React, { Component } from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import FBStatusBar from '@components/FBStatusBar';
import styles from './styles';

import { Toolbar, ToolbarAction, Searchbar } from 'react-native-paper';

export default class SearchHeader extends Component {
    state = {
        searchQuery: '',
        isFocused: false
    };

    onFocus = () => {
        this.setState(
            {
                isFocused: true
            },
            () => {
                this.props.navigation.navigate('SearchScreen');
                setTimeout(() => {
                    this.searchTextInput.focus();
                }, 240);
            }
        );
    };

    onBlur = () => {
        this.setState({
            isFocused: false
        });
    };

    onPress = () => {
        if (this.state.isFocused) {
            this.setState({
                isFocused: false
            });
            this.props.navigation.goBack();
        } else {
            this.onFocus();
        }
    };

    render() {
        const activeScreen = this.props.navigation.state.routes[0].routes[
            this.props.navigation.state.routes[0].index
        ].routeName;

        return (
            <View
                style={
                    activeScreen === 'HomeScreen'
                        ? styles.container
                        : styles.elevatedContainer
                }
            >
                <FBStatusBar backgroundColor="black" barStyle="light-content" />
                {this.state.isFocused ? (
                    <Toolbar style={styles.toolbar}>
                        <Searchbar
                            ref={input => {
                                this.searchTextInput = input;
                            }}
                            style={styles.searchbar}
                            placeholder="Search"
                            icon={
                                Platform.OS === 'ios'
                                    ? 'keyboard-arrow-left'
                                    : 'arrow-back'
                            }
                            onIconPress={this.onPress}
                            onChangeText={query => {
                                this.setState({ searchQuery: query });
                            }}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            value={this.state.searchQuery}
                        />
                    </Toolbar>
                ) : (
                    <Toolbar style={styles.toolbar}>
                        <ToolbarAction icon="search" onPress={this.onPress} />
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.onPress}
                        >
                            <Text style={styles.btnText}>Search</Text>
                        </TouchableOpacity>
                        <ToolbarAction icon="face" onPress={this._onSearch} />
                    </Toolbar>
                )}
            </View>
        );
    }
}
