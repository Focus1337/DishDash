import {IColorsValues} from "../modules/theme/interfaces/IColorsValues.ts";
import {ColorsKeys} from "../modules/theme/ColorKeys.ts";

export const Colors: Record<ColorsKeys, IColorsValues> = {
    backgroundPrimary: {
        default: '#FFFFFF',
    },
    primary: {
        default: '#86BF3E'
    },
    primaryAccent: {
        default: '#6AA920'
    },
    primaryCTA: {
        default: '#86BF3E'
    },
    secondary: {
        default: '#FFA909'
    },
    secondaryAccent: {
        default: '#FFA908'
    },
    secondaryCTA: {
        default: '#FEC250'
    },
    alert: {
        default: '#F85657'
    },
    text: {
        default: '#052C05'
    },
    text600: {
        default: '#001E00'
    },
    text500: {
        default: '#052C05'
    },
    text400: {
        default: '#354D35'
    }
};