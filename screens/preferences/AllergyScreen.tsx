import {observer} from "mobx-react";
import React from "react";
import {Alert} from "react-native";
import {AllergyScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/preferences/Preferences.tsx";

let allergies = ['Shrimp', 'Carrot', 'Mushroom', 'Onion', 'Bell Pepper', 'Garlic', 'Apple', 'Eggplant', 'Banana'];

export const AllergyScreen = observer(({navigation}: AllergyScreenProps) => {
    const handlePrevious = () => navigation.navigate("Welcome");
    const handleNextStep = () => navigation.navigate("Diet");
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
        <Preferences headerText={'Do you have any allergies or dislikes?'}
                     text={'This will help us curate more recipe experiences for you.'} items={allergies}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={1} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={false}/>
    );
})
