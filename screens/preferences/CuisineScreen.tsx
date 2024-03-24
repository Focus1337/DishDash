import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {Alert} from "react-native";
import {CuisineScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/preferences/Preferences.tsx";
import {useRootStore} from "../../hooks/useRootStore.ts";
import {cuisineOptions, CuisineType, parseCuisine} from "../../modules/preferences/models/CuisineType.ts";
import {useFocusEffect} from "@react-navigation/core";

export const CuisineScreen = observer(({navigation}: CuisineScreenProps) => {
    let [cuisines, setCuisines] = useState<string[]>([]);
    const {cuisineStore} = useRootStore();

    const updateCuisines = () => {
        cuisineStore.actionHandleGet().then(() => {
            let items = cuisineStore.items;

            if (items !== null) {
                setCuisines(Object.values(cuisineStore.items!));
            }
        });
    };

    useEffect(() => {
        updateCuisines();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            updateCuisines();

            return () => {
            };
        }, [cuisineStore])
    );

    const handlePrevious = () => navigation.navigate("Diet");

    const handleNextStep = async () => {
        await cuisineStore.actionHandleForceAdd(cuisines.map(c => parseCuisine(c)).filter((c): c is CuisineType => c !== undefined));

        Alert.alert("Preferences saved", "We have taken into account your allergies, diet and cuisine. Recipes are being prepared for you...");
        return navigation.navigate("Tab");
    };

    const handleSkip = async () => {
        await cuisineStore.actionHandleForceAdd([]);

        Alert.alert("Preferences saved", "We have taken into account your allergies, diet and cuisine. Recipes are being prepared for you...");
        return navigation.navigate("Tab");
    };

    const handleAdd = (value: string) => {
        setCuisines(prev => [...prev, value]);
    };

    const handleRemove = (value: string) => {
        setCuisines(prev => prev.filter(p => p != value))
    };

    return (
        <Preferences headerText={'Types of cuisines you most interested in?'}
                     text={'This will help us curate more recipe experiences for you.'} items={cuisineOptions}
                     activatedItems={cuisines}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={3} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={true}/>
    );
})
