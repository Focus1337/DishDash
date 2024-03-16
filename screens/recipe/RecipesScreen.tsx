import {observer} from "mobx-react";
import {SafeAreaView, Text} from "react-native";
import {RecipesScreenProps} from "../../utils/navigation/navigationTypes.ts";

export const RecipesScreen = observer(({navigation}: RecipesScreenProps) => {


    return (
        <SafeAreaView>
            <Text>Recipes Screen</Text>
        </SafeAreaView>
    );
})