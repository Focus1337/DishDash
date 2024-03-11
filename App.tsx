import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navigation from "./utils/navigation/Navigation";
import {NativeStackParamList} from "./utils/navigation/navigationTypes.ts";
import {useTheme} from "./hooks/useTheme.ts";
import {WelcomeScreen} from "./screens/WelcomeScreen.tsx";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {

    return (
        <NavigationContainer ref={Navigation.navigationRef}>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen name={'Welcome'} component={WelcomeScreen} options={{headerShown: false}}/>
                {/*<Stack.Screen name={'TodoItem'} component={TodoItemScreen}*/}
                {/*              options={({route}) =>*/}
                {/*                  ({title: `Task ${route.params.itemId}`})}/>*/}
                {/*<Stack.Screen name={'DoneList'} component={DoneListScreen} options={{headerShown: false}}/>*/}
                {/*<Stack.Screen name={'Logs'} component={LogsScreen} options={{headerShown: false}}/>*/}
            </Stack.Navigator>
            <ThemedStatusBar/>
        </NavigationContainer>
    );
}

const ThemedStatusBar = () => {
    const {Colors} = useTheme();
    return <StatusBar barStyle={'dark-content'} backgroundColor={Colors.backgroundPrimary}/>
}