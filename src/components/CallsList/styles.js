import { StyleSheet } from 'react-native';
import AppStyles from 'src/config/styles';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nameView: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'center'
    },
    head: {
        fontSize: 16,
        color: AppStyles.colors.black,
        textAlign: 'left'
    },
    sub: {
        color: AppStyles.colors.grey,
        paddingTop: 4
    },
    icon: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hView: {
        backgroundColor: AppStyles.colors.lightWhite
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        color: AppStyles.colors.grey,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    groupView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12
    },
    grpIcn: {
        paddingHorizontal: 16
    },
    grpText: {
        fontSize: 15
    }
});

export default styles;
