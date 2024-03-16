import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navigation from "./utils/navigation/Navigation";
import {NativeStackParamList} from "./utils/navigation/navigationTypes.ts";
import {useTheme} from "./hooks/useTheme.ts";
import {WelcomeScreen} from "./screens/WelcomeScreen.tsx";
import {AllergyScreen} from "./screens/preferences/AllergyScreen.tsx";
import {DietScreen} from "./screens/preferences/DietScreen.tsx";
import {CuisineScreen} from "./screens/preferences/CuisineScreen.tsx";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {

    return (
        <NavigationContainer ref={Navigation.navigationRef}>
            <Stack.Navigator initialRouteName={'Welcome'} screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
                <Stack.Screen name={'Welcome'} component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Allergy'} component={AllergyScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Diet'} component={DietScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'Cuisine'} component={CuisineScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
            <ThemedStatusBar/>
        </NavigationContainer>
    );
}

const ThemedStatusBar = () => {
    const {Colors} = useTheme();
    return <StatusBar barStyle={'dark-content'} backgroundColor={Colors.backgroundPrimary}/>
}