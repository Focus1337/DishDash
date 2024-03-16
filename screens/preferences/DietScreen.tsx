import {observer} from "mobx-react";
import React, {useState} from "react";
import {useTheme} from "../../hooks/useTheme.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {Alert, SafeAreaView} from "react-native";
import {CuisineScreenProps, DietScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/Preferences.tsx";

let diets = ['None', 'Vegan', 'Lactose Intolerance', 'Soy Allergy', 'Pescatarian', 'Gluten-Free', 'Shellfish Allergy', 'Vegetarian', 'Kosher'];

export const DietScreen = observer(({navigation}: DietScreenProps) => {
    const handlePrevious = () => navigation.navigate("Allergy");
    const handleNextStep = () => navigation.navigate("Cuisine");
    const handleSkip = () => {
        Alert.alert("Skipped", "skip");
    };
    const handleAdd = (value: string) => {
        Alert.alert(value);
    };

    const handleRemove = (value: string) => {
        Alert.alert("removed: " + value);
    };

    return (
        <Preferences headerText={'Do you have any dietary restrictions?'}
                     text={'This will help us curate more recipe experiences for you.'} items={diets}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={2} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={false}/>
    );
})
