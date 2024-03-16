import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";
import {GestureResponderEvent, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PageNumber} from "./PageNumber.tsx";
import {OptionButton} from "./OptionButton.tsx";
import {FilledMainButton, OutlinedMainButton} from "./buttons.tsx";
import React from "react";

interface IPreferencesProps {
    headerText: string,
    text: string,
    items: string[],
    onItemActivate: (value: string) => void,
    onItemDeactivate: (value: string) => void,
    pageCount: number,
    currentPage: number,
    onPrevious: (event: GestureResponderEvent) => void,
    onNext: (event: GestureResponderEvent) => void,
    onSkip: (event: GestureResponderEvent) => void,
    isFinal: boolean
}

export const Preferences = (props: IPreferencesProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);
    const pages = [];

    for (let i = 1; i <= props.pageCount; i++) {
        pages.push(i);
    }

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.main}>
                <View style={localStyles.mainHeader}>
                    <View style={localStyles.mainHeaderPage}>
                        {pages.map(p => <PageNumber key={`page${p}`} pageNumber={p}
                                                    isActive={p == props.currentPage}/>)}
                    </View>
                    <TouchableOpacity onPress={props.onSkip}>
                        <Text style={[styles.textBody16M, styles.textAlert]}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <View style={{gap: 10}}>
                    <Text style={styles.textBody30}>{props.headerText}</Text>
                    <Text style={styles.textBody16R}>{props.text}</Text>
                </View>

                <ScrollView style={{marginTop: 10}} contentContainerStyle={localStyles.mainChoose}>
                    {props.items.map(a => <OptionButton key={a} text={a} onActivate={() => props.onItemActivate(a)}
                                                        onDeactivate={() => props.onItemDeactivate(a)}/>)}
                </ScrollView>
            </View>
            <View style={localStyles.controls}>
                <OutlinedMainButton onPress={props.onPrevious} title="Previous" buttonStyles={styles.buttonWidth40}/>
                <FilledMainButton onPress={props.onNext} title={props.isFinal ? "Last Step" : "Next Step"}
                                  buttonStyles={styles.buttonWidth40}/>
            </View>
        </SafeAreaView>
    )
}

let localStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        gap: 20
    },

    mainHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    mainHeaderPage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    mainChoose: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },

    controls: {
        display: 'flex',
        flex: 0,
        gap: 16,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 32
    }
});
