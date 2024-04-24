import React, {useState} from "react";
import {ImageLibraryOptions, launchImageLibrary} from "react-native-image-picker";
import {Dimensions, Image, StyleSheet, TouchableOpacity} from "react-native";

const windowWidth = Dimensions.get('window').width;
const avatarSize = windowWidth * 0.25;

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

const localStyles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 2,
    },
});
