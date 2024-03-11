import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type NativeStackParamList = {
    Welcome: undefined;
    Allergy: undefined,
    Cuisine: undefined,
    Diet: undefined
    // TodoItem: { itemId: string };
};

export type WelcomeScreenProps = NativeStackScreenProps<NativeStackParamList, 'Welcome'>;
export type AllergyScreenProps = NativeStackScreenProps<NativeStackParamList, 'Allergy'>;
export type CuisineScreenProps = NativeStackScreenProps<NativeStackParamList, 'Cuisine'>;
export type DietScreenProps = NativeStackScreenProps<NativeStackParamList, 'Diet'>;
