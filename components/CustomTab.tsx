import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {ReactNode, useState} from "react";
import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";

interface CustomTabProps {
    tab1Content: ReactNode;
    tab2Content: ReactNode;
    tab3Content: ReactNode;
}

export const CustomTab = (props: CustomTabProps) => {
    let [activeTab, setActiveTab] = useState<'tab1' | 'tab2' | 'tab3'>('tab1');

    let result: ReactNode;

    switch (activeTab) {
        case 'tab1':
            result = props.tab1Content;
            break;
        case 'tab2':
            result = props.tab2Content;
            break;
        case 'tab3':
            result = props.tab3Content;
            break;
        default:
            result = props.tab1Content;
    }

    return (
        <View style={{flex: 1}}>
            <View style={localStyles.container}>
                <CustomTabButton text={"Overview"} active={activeTab === 'tab1'} onPress={() => setActiveTab('tab1')}/>
                <CustomTabButton text={"Ingredients"} active={activeTab === 'tab2'}
                                 onPress={() => setActiveTab('tab2')}/>
                <CustomTabButton text={"Directions"} active={activeTab === 'tab3'}
                                 onPress={() => setActiveTab('tab3')}/>
            </View>
            <View>
                {result}
            </View>
        </View>
    );
};

interface IOptionButtonProps {
    text: string,
    active: boolean,
    onPress: () => void,
}

export const CustomTabButton = (props: IOptionButtonProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <TouchableOpacity style={[localStyles.button, props.active ? styles.buttonPrimaryCTA : {}]}
                          onPress={props.onPress}>
            <Text
                style={[styles.textBody14M, props.active ? styles.textWhite : {color: Colors.text600}]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

let localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#F5F6F5",
        padding: 4,
        borderRadius: 100
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 100,
        gap: 6,
    }
});
