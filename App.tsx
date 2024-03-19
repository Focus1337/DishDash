import React from 'react';
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

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {

    return (
        <NavigationContainer ref={Navigation.navigationRef}>
            <Stack.Navigator initialRouteName={'RecipeDetails'}
                             screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
                <Stack.Screen name={'Tab'} component={TabNavigationContainer} options={{headerShown: false}}/>
                <Stack.Screen name={'Welcome'} component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Allergy'} component={AllergyScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Diet'} component={DietScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Cuisine'} component={CuisineScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'RecipeDetails'} component={RecipeDetailsScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
            <ThemedStatusBar/>
        </NavigationContainer>
    );
}

const ThemedStatusBar = () => {
    const {Colors} = useColors();
    return <StatusBar barStyle={'dark-content'} backgroundColor={Colors.backgroundPrimary}/>
}