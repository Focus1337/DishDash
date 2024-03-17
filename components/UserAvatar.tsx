import React, {useState} from "react";
import {ImageLibraryOptions, launchImageLibrary} from "react-native-image-picker";
import {Image, StyleSheet, TouchableOpacity} from "react-native";

export const UserAvatar = () => {
    const [avatarSource, setAvatarSource] = useState<string | null>(null);

    const selectImage = async () => {
        const options: ImageLibraryOptions = {
            mediaType: "photo",
            selectionLimit: 1
        };

        await launchImageLibrary(options, (response) => {
            if (response.didCancel || response.errorMessage || response.errorCode) {
                return;
            }

            const uri = response.assets?.[0].uri ?? null;
            setAvatarSource(uri);
        });
    };

    return (
        <TouchableOpacity onPress={selectImage} style={localStyles.avatarContainer}>
            <Image
                source={avatarSource !== null ? {uri: avatarSource} : require('../assets/images/person.jpg')}
                style={localStyles.avatar}
            />
        </TouchableOpacity>
    );
};

let localStyles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});