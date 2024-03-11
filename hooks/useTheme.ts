import {IColors} from "../modules/theme/interfaces/IColors.ts";
import {Colors} from "../styles/Colors.ts";
import {ColorsKeys} from "../modules/theme/ColorKeys.ts";
import {useMemo} from "react";

export const useTheme = (): { Colors: IColors; } => {
    const colors = useMemo<IColors>(() => {
        const result = {};
        const keys = Object.keys(Colors) as Array<ColorsKeys>;

        for (let i = 0; i < keys.length; i++) {
            const colorObject = Colors[keys[i]];
            Object.assign(result, {[keys[i]]: colorObject['default']});
        }

        return result as IColors;
    }, []);

    return {Colors: colors};
};
