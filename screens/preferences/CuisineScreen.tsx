import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {Alert, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CuisineScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {Preferences} from "../../components/preferences/Preferences.tsx";
import {useRootStore} from "../../hooks/useRootStore.ts";
import {cuisineOptions, CuisineType, parseCuisine} from "../../modules/preferences/models/CuisineType.ts";
import {useFocusEffect} from "@react-navigation/core";
import {useStyles} from "../../hooks/useStyles.ts";
import {useColors} from "../../hooks/useColors.ts";
import {FilledMainButton} from "../../components/buttons.tsx";

export const CuisineScreen = observer(({navigation}: CuisineScreenProps) => {
    let [cuisines, setCuisines] = useState<string[]>([]);
    const {cuisineStore} = useRootStore();
    let [isModalVisible, setIsModalVisible] = useState(false);
    const {Colors} = useColors();
    const styles = useStyles(Colors);

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

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleNextStep = async () => {
        await cuisineStore.actionHandleForceAdd(cuisines.map(c => parseCuisine(c)).filter((c): c is CuisineType => c !== undefined));
        showModal();
    };

    const handleSkip = async () => {
        await cuisineStore.actionHandleForceAdd([]);
        showModal();
    };

    const handleAdd = (value: string) => {
        setCuisines(prev => [...prev, value]);
    };

    const handleRemove = (value: string) => {
        setCuisines(prev => prev.filter(p => p != value));
    };

    const closeModal = () => {
        setIsModalVisible(false);
        navigation.navigate("Tab");
    };

    return (
        <Preferences headerText={'Types of cuisines you most interested in?'}
                     text={'This will help us curate more recipe experiences for you.'} items={cuisineOptions}
                     activatedItems={cuisines}
                     onItemActivate={handleAdd} onItemDeactivate={handleRemove} pageCount={3}
                     currentPage={3} onPrevious={handlePrevious} onNext={handleNextStep} onSkip={handleSkip}
                     isFinal={true}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}>
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <Text style={styles.textHeader4}>Preferences saved</Text>
                        <Text style={styles.textBody15M}>We have taken into account your allergies, diet, and
                            cuisine.
                            Recipes are being prepared for you...</Text>

                        <View style={[modalStyles.button]}>
                            <FilledMainButton buttonStyles={{flex: 1}} onPress={closeModal} title="Thanks"/>
                        </View>
                    </View>
                </View>
            </Modal>
        </Preferences>
    );
})

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        gap: 12,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 200,
        gap: 10,
        backgroundColor: '#F5F6F5',
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
    }
});