import { AppRegistry } from 'react-native';
import App from './src/Entrypoint';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader'
]);

AppRegistry.registerComponent('Messenger', () => App);
