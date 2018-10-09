import { StyleSheet } from 'react-native';
import Metrics from 'src/config/metrics';

const styles = StyleSheet.create({
    card: {
        borderRadius: 30
    },
    list: {
        overflow: 'visible'
    },
    reactView: {
        width: (Metrics.screenWidth - 24) / 6,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reaction: {
        width: 40,
        height: 40,
        marginBottom: 4
    }
});

export default styles;
