import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {useState} from "react";
import {set} from "mobx";

interface SearchInputProps {
    onSearch: (query: string) => void;
    initValue?: string;
}

export const SearchInput = (props: SearchInputProps) => {
    let [query, setQuery] = useState<string>(props.initValue ?? '');
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const clearText = () => {
        setQuery('');
    }

    return (
        <View style={[localStyles.searchInput]}>
            <FontAwesome name={"search"} color={Colors.text300} size={20}/>
            <TextInput style={[{flex: 1}, styles.textBody14R]} numberOfLines={1} inputMode={'text'}
                       placeholder={"Search anything..."} onChangeText={newText => setQuery(newText)}
                       onSubmitEditing={() => props.onSearch(query)} returnKeyType={"search"} value={query}/>
            {query !== '' ?
                <TouchableOpacity onPress={clearText}>
                    <Feather name={"x"} color={Colors.text300} size={20}/>
                </TouchableOpacity> :
                <Feather name={"sliders"} color={Colors.text300} size={20}/>}
        </View>
    );
};

let localStyles = StyleSheet.create({
    searchInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 200,
        gap: 10,
        backgroundColor: '#F5F6F5',
    }
});