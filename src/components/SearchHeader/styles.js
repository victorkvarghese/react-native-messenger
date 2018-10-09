import { StyleSheet } from 'react-native';
import AppStyles from 'src/config/styles';
import { isIphoneX } from 'src/lib/isIphoneX';

const styles = StyleSheet.create({
    container: {
        height: isIphoneX() ? 100 : null,
        backgroundColor: AppStyles.colors.black,
        justifyContent: 'flex-end',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: AppStyles.colors.separator
    },
    elevatedContainer: {
        height: isIphoneX() ? 100 : null,
        backgroundColor: AppStyles.colors.black,
        justifyContent: 'flex-end',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: AppStyles.colors.separator,
        elevation: 4
    },

    searchbar: {
        backgroundColor: AppStyles.colors.white,
        elevation: 0
    },
    toolbar: {
        backgroundColor: AppStyles.colors.white
    },
    search: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    input: {
        width: '90%',
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: AppStyles.fonts.FONT_REGULAR
    },
    btn: {
        width: '75%',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 16
    },
    btnText: {
        fontSize: 16,
        fontFamily: AppStyles.fonts.FONT_REGULAR,
        color: '#7f8c8d'
    }
});

export default styles;
