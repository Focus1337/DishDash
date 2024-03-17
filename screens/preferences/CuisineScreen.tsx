import {observer} from "mobx-react";
import React from "react";
import {Alert} from "react-native";
import {CuisineScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/preferences/Preferences.tsx";

let cuisines = ['European', 'African', 'Asian', 'Middle-Eastern', 'Latin America'];

export const CuisineScreen = observer(({navigation}: CuisineScreenProps) => {
    const handlePrevious = () => navigation.navigate("Diet");
    const handleNextStep = () => {
        Alert.alert("Finish");
    };
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
        <Preferences headerText={'Types of cuisines  you most interested in?'}
                     text={'This will help us curate more recipe experiences for you.'} items={cuisines}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={3} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={true}/>
    );
})
