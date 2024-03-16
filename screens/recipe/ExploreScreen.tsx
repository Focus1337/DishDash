import {observer} from "mobx-react";
import {SafeAreaView, Text} from "react-native";
import {ExploreScreenProps} from "../../utils/navigation/navigationTypes.ts";

export const ExploreScreen = observer(({navigation}: ExploreScreenProps) => {


    return (
        <SafeAreaView>
            <Text>Explore Screen</Text>
        </SafeAreaView>
    );
})