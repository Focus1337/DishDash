import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {AllergyScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/preferences/Preferences.tsx";
import {Health, healthOptions, parseHealth} from "../../modules/preferences/models/Health.ts";
import {useRootStore} from "../../hooks/useRootStore.ts";
import {useFocusEffect} from "@react-navigation/core";

export const AllergyScreen = observer(({navigation}: AllergyScreenProps) => {
    let [allergies, setAllergies] = useState<string[]>([]);
    const {healthStore} = useRootStore();

    const updateAllergies = () => {
        healthStore.actionHandleGet().then(() => {
            let items = healthStore.items;
            if (items !== null) {
                setAllergies(Object.values(healthStore.items!));
            }
        });
    };

    useEffect(() => {
        updateAllergies();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            updateAllergies();

            return () => {
            };
        }, [healthStore])
    );

    const handlePrevious = () => navigation.navigate("Welcome");

    const handleNextStep = async () => {
        await healthStore.actionHandleForceAdd(allergies.map(a => parseHealth(a)).filter((a): a is Health => a !== undefined));

        return navigation.navigate("Diet");
    };

    const handleSkip = async () => {
        await healthStore.actionHandleForceAdd([]);

        return navigation.navigate("Diet");
    };

    const handleAdd = (value: string) => {
        setAllergies(prev => [...prev, value]);
    };

    const handleRemove = (value: string) => {
        setAllergies(prev => prev.filter(p => p != value))
    };

    return (
        <Preferences headerText={'Do you have any allergies or dislikes?'}
                     text={'This will help us curate more recipe experiences for you.'} items={healthOptions}
                     activatedItems={allergies}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={1} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={false}/>
    );
})
