import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {WelcomeScreenProps} from "../utils/navigation/navigationTypes.ts";
import {useStyles} from "../hooks/useStyles.ts";
import {useTheme} from "../hooks/useTheme.ts";
import {observer} from "mobx-react";
import {FilledMainButton} from "../components/Button.tsx";
import {APP_NAME} from "../utils/env.ts";

export const WelcomeScreen = observer(({navigation}: WelcomeScreenProps) => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    const handlePress = () => navigation.navigate("Allergy");

    return (
        <SafeAreaView style={localStyles.container}>
            <ImageBackground source={require('../assets/images/welcome.png')} resizeMode="cover" style={{flex: 1}}>
                <View style={{flex: 2}}></View>
                <View style={localStyles.main}>
                    <Text style={[styles.textHeader2, styles.textWhite]}>{APP_NAME}</Text>
                    <Text style={[styles.textBody16R, styles.textWhite, {textAlign: 'center'}]}>Welcome
                        to Dish Dash where you virtually travel
                        the world through recipes.</Text>
                    <FilledMainButton onPress={handlePress} title="Get Started" buttonStyles={styles.buttonWidth100}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
})

let localStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        gap: 20,
    }
});
