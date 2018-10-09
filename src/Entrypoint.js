import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import NavigationStack from 'src/navigation';
import configureStore from 'src/store/configureStore';
const { persistor, store } = configureStore();
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <PaperProvider theme={theme}>
                        <NavigationStack />
                    </PaperProvider>
                </PersistGate>
            </Provider>
        );
    }
}
