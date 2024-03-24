import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navigation from "./utils/navigation/Navigation";
import {NativeStackParamList} from "./utils/navigation/navigationTypes.ts";
import {useColors} from "./hooks/useColors.ts";
import {WelcomeScreen} from "./screens/WelcomeScreen.tsx";
import {AllergyScreen} from "./screens/preferences/AllergyScreen.tsx";
import {DietScreen} from "./screens/preferences/DietScreen.tsx";
import {CuisineScreen} from "./screens/preferences/CuisineScreen.tsx";
import {TabNavigationContainer} from "./screens/TabNavigationContainer.tsx";
import {RecipeDetailsScreen} from "./screens/recipe/RecipeDetailsScreen.tsx";
import {SearchResultScreen} from "./screens/recipe/SearchResultScreen.tsx";
import {useRootStore} from "./hooks/useRootStore.ts";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {
    const {dietStore, healthStore, cuisineStore} = useRootStore();

    useEffect(() => {
        const initializeStores = async () => {
            await Promise.all([
                dietStore.actionHandleGet(),
                healthStore.actionHandleGet(),
                cuisineStore.actionHandleGet()
            ]);

            if (dietStore.items === null || healthStore.items === null || cuisineStore.items === null) {
                Navigation.replace("Welcome");
            }
        };

        (async () => await initializeStores())();
    }, [dietStore, healthStore, cuisineStore]);

    return (
        <NavigationContainer ref={Navigation.navigationRef}>
            <Stack.Navigator initialRouteName={'Tab'}
                             screenOptions={{contentStyle: {backgroundColor: 'white'}, headerShown: false}}>
                <Stack.Screen name={'Tab'} component={TabNavigationContainer}/>
                <Stack.Screen name={'Welcome'} component={WelcomeScreen}/>
                <Stack.Screen name={'Allergy'} component={AllergyScreen}/>
                <Stack.Screen name={'Diet'} component={DietScreen}/>
                <Stack.Screen name={'Cuisine'} component={CuisineScreen}/>
                <Stack.Screen name={'RecipeDetails'} component={RecipeDetailsScreen}/>
                <Stack.Screen name={'SearchResult'} component={SearchResultScreen}/>
            </Stack.Navigator>
            <ThemedStatusBar/>
        </NavigationContainer>
    );
}

const ThemedStatusBar = () => {
    const {Colors} = useColors();
    return <StatusBar barStyle={'dark-content'} backgroundColor={Colors.backgroundPrimary}/>
}