import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet} from "react-native";
import {ProfileScreenProps} from "../utils/navigation/navigationTypes.ts";

export const ProfileScreen = observer(({navigation}: ProfileScreenProps) => {


    return (
        <SafeAreaView>

        </SafeAreaView>
    );
})


let localStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        gap: 20
    },

    mainHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    mainHeaderPage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    mainChoose: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },

    controls: {
        display: 'flex',
        flex: 0,
        gap: 16,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 32
    }
});
