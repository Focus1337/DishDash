import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {DietScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/preferences/Preferences.tsx";
import {useRootStore} from "../../hooks/useRootStore.ts";
import {Diet, dietOptions, parseDiet} from "../../modules/preferences/models/Diet.ts";
import {useFocusEffect} from "@react-navigation/core";

export const DietScreen = observer(({navigation}: DietScreenProps) => {
    let [diets, setDiets] = useState<string[]>([]);
    const {dietStore} = useRootStore();

    const updateDiets = () => {
        dietStore.actionHandleGet().then(() => {
            let items = dietStore.items;

            if (items !== null) {
                setDiets(Object.values(dietStore.items!));
            }
        });
    };

    useEffect(() => {
        updateDiets();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            updateDiets();

            return () => {
            };
        }, [dietStore])
    );

    const handlePrevious = () => navigation.navigate("Allergy");

    const handleNextStep = async () => {
        await dietStore.actionHandleForceAdd(diets.map(d => parseDiet(d)).filter((d): d is Diet => d !== undefined));

        return navigation.navigate("Cuisine");
    };

    const handleSkip = async () => {
        await dietStore.actionHandleForceAdd([]);

        return navigation.navigate("Cuisine");
    };

    const handleAdd = (value: string) => {
        setDiets(prev => [...prev, value]);
    };

    const handleRemove = (value: string) => {
        setDiets(prev => prev.filter(p => p != value))
    };

    return (
        <Preferences headerText={'Do you have any dietary restrictions?'}
                     text={'This will help us curate more recipe experiences for you.'} items={dietOptions}
                     activatedItems={diets}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={2} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={false}/>
    );
})
