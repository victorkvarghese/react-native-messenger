import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import NavigationStack from '@navigation';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0084ff',
        accent: '#f1c40f',
        background: '#f9f9f9',
        paper: 'white'
    }
};

export default class Entrypoint extends Component {
    render() {
        return (
            <PaperProvider theme={theme}>
                <NavigationStack />
            </PaperProvider>
        );
    }
}
