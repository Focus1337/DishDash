import {SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {WelcomeScreenProps} from "../utils/navigation/navigationTypes.ts";
import {useEffect, useState} from "react";
import {useStyles} from "../hooks/useStyles.ts";
import {useTheme} from "../hooks/useTheme.ts";
import {observer} from "mobx-react";
import Button from "../components/Button.tsx";

export const WelcomeScreen = observer(({navigation}: WelcomeScreenProps) => {
    let [title, setTitle] = useState<string>('');
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    const handlePress = () => navigation.navigate("Welcome");

    return (
        <SafeAreaView>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, gap: 40}}>
                <Text style={[styles.textHeader2, styles.textWhite]}>DishDash</Text>
                <Text style={[styles.textBody16, styles.textRegular, styles.textWhite]}>Welcome to Dish Dash where you virtually travel
                    the world through recipes.</Text>
                <Button onPress={handlePress} title="Get Started"></Button>
            </View>
        </SafeAreaView>
    )
})

//
// /* Description */
//
// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px;
// gap: 16px;
//
// width: 335px;
// height: 112px;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
//
//
// /* Recipe Passport */
//
// width: 335px;
// height: 48px;
//
// /* Recipe Headings/H2 (B) */
// font-family: 'Cabin';
// font-style: normal;
// font-weight: 700;
// font-size: 40px;
// line-height: 48px;
// /* identical to box height, or 120% */
// text-align: center;
//
// color: #FFFFFF;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// align-self: stretch;
// flex-grow: 0;
//
//
// /* Welcome to recipe passport where you virtually travel the world through recipes. */
//
// width: 335px;
// height: 48px;
//
// /* Recipe Body/16 (R) */
// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 24px;
// /* or 150% */
// text-align: center;
//
// color: #FFFFFF;
//
//
// /* Inside auto layout */
// flex: none;
// order: 1;
// align-self: stretch;
// flex-grow: 0;
//
//
// /* Btn */
//
// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 14px 10px;
// gap: 10px;
//
// width: 335px;
// height: 52px;
//
// /* CTA */
// background: #86BF3E;
// box-shadow: 0px 8px 16px rgba(134, 191, 62, 0.2);
// border-radius: 100px;
//
// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
//
//
// /* Get Started */
//
// width: 95px;
// height: 24px;
//
// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 24px;
// /* identical to box height, or 150% */
// text-align: center;
//
// /* White */
// color: #FFFFFF;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
