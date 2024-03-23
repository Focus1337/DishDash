import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {TabParamList} from "../utils/navigation/navigationTypes.ts";
import {HomeScreen} from "./recipe/HomeScreen.tsx";
import {ProfileScreen} from "./ProfileScreen.tsx";
import {ExploreScreen} from "./recipe/ExploreScreen.tsx";
import {useColors} from "../hooks/useColors.ts";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigationContainer = () => {
    const {Colors} = useColors();

    const handleTabOptions = (): BottomTabNavigationOptions => {
        return {
            headerShown: false,
            tabBarStyle: {backgroundColor: 'white'},
            tabBarActiveTintColor: Colors.primaryCTA,
            tabBarLabelStyle: {
                fontFamily: 'Montserrat-Medium',
                fontSize: 12,
                lineHeight: 18
            },
            tabBarHideOnKeyboard: true
        };
    };

    return (
        <Tab.Navigator initialRouteName={'Home'} screenOptions={() => handleTabOptions()}>
            <Tab.Screen name={"Home"} component={HomeScreen}
                        options={{
                            tabBarIcon: ({color, size}) => <FontAwesome name={"spoon"}
                                                                        color={color} size={24}/>,
                            tabBarLabel: "Recipes"
                        }}/>
            <Tab.Screen name={"Explore"} component={ExploreScreen} options={{
                tabBarIcon: ({color}) => <FontAwesome name={"search"} color={color} size={24}/>
            }}/>
            <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
                tabBarIcon: ({color}) => <FontAwesome name={"user"} color={color} size={24}/>,
            }}/>
        </Tab.Navigator>
    );
}