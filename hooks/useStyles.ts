import {IColors} from "../modules/theme/interfaces/IColors.ts";
import {StyleSheet} from "react-native";

export const useStyles = (colors: IColors) =>
    StyleSheet.create({

        buttonPrimaryCTA: {
            backgroundColor: colors.primaryCTA
        },

        buttonPrimaryAccent: {
            backgroundColor: colors.primaryAccent
        },

        buttonSecondary: {
            backgroundColor: colors.secondary
        },

        buttonFilled: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 4,
            paddingVertical: 10,
            gap: 10,
            position: 'absolute',
            width: 152,
            height: 56,
            left: 96,
            top: 100,
            backgroundColor: colors.primaryCTA,
            borderRadius: 8
        }
    });