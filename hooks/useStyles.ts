import {IColors} from "../modules/theme/interfaces/IColors.ts";
import {StyleSheet} from "react-native";

export const useStyles = (colors: IColors) =>
    StyleSheet.create({
        textWhite: {
            color: 'white'
        },

        textAlert: {
            color: colors.alert
        },

        textMedium: {
            fontWeight: "500"
        },

        textRegular: {
            fontWeight: "400"
        },

        textHeader1: {
            fontFamily: 'Cabin-Bold',
            fontStyle: 'normal',
            fontSize: 48,
            lineHeight: 62,
            color: colors.text600
        },

        textHeader2: {
            fontFamily: 'Cabin-Bold',
            fontStyle: 'normal',
            fontSize: 40,
            lineHeight: 48,
            color: colors.text600
        },

        textHeader3: {
            fontFamily: 'Cabin-Bold',
            fontStyle: 'normal',
            fontSize: 36,
            lineHeight: 44,
            color: colors.text600
        },

        textHeader4: {
            fontFamily: 'Cabin-Bold',
            fontStyle: 'normal',
            fontSize: 24,
            lineHeight: 32,
            color: colors.text600
        },

        textHeader5: {
            fontFamily: 'Cabin-Bold',
            fontStyle: 'normal',
            fontSize: 32,
            lineHeight: 40,
            color: colors.text600
        },

        textHeader6S: {
            fontFamily: 'Cabin-SemiBold',
            fontStyle: 'normal',
            fontSize: 20,
            lineHeight: 32,
            color: colors.text600
        },

        textBody24: {
            fontFamily: 'Montserrat-Bold',
            fontStyle: 'normal',
            fontSize: 24,
            lineHeight: 36,
            color: colors.text600
        },

        textBody30: {
            fontFamily: 'Cabin-Bold',
            fontStyle: 'normal',
            fontSize: 30,
            lineHeight: 39,
            color: colors.text600
        },

        textBody20: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 20,
            lineHeight: 28,
            color: colors.text600
        },

        textBody18: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 18,
            lineHeight: 27,
            color: colors.text600
        },

        textBody16R: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 16,
            lineHeight: 24,
            color: colors.text600
        },

        textBody16M: {
            fontFamily: 'Montserrat-Medium',
            fontStyle: 'normal',
            fontSize: 16,
            lineHeight: 24,
            color: colors.text600
        },

        textBody15: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 15,
            lineHeight: 24,
            color: colors.text600
        },

        textBody14R: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 21,
            color: colors.text600
        },

        textBody14M: {
            fontFamily: 'Montserrat-Medium',
            fontStyle: 'normal',
            fontSize: 14,
            lineHeight: 21,
            color: colors.text600
        },

        textBody12R: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 12,
            lineHeight: 18,
            color: colors.text600
        },

        textBody12M: {
            fontFamily: 'Montserrat-Medium',
            fontStyle: 'normal',
            fontSize: 12,
            lineHeight: 18,
            color: colors.text600
        },

        textBody10: {
            fontFamily: 'Montserrat-Regular',
            fontStyle: 'normal',
            fontSize: 10,
            lineHeight: 15,
            color: colors.text600
        },

        buttonWhite: {
            backgroundColor: 'white'
        },

        buttonText: {
            fontFamily: 'Montserrat-SemiBold',
        },

        buttonPrimaryCTA: {
            backgroundColor: colors.primaryCTA
        },

        buttonPrimaryAccent: {
            backgroundColor: colors.primaryAccent
        },

        buttonSecondary: {
            backgroundColor: colors.secondary
        },

        buttonWidth100: {
            width: '100%'
        },

        buttonWidth40: {
            width: '40%'
        },

        buttonFilled: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 14,
            borderRadius: 100
        },

        buttonOutlined: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 14,
            borderRadius: 100,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: colors.outline
        },

    });