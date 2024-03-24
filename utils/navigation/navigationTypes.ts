import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RecipeSearchRequest} from "../../modules/recipes/models/RecipeSearchRequest.ts";

export type NativeStackParamList = {
    Welcome: undefined,
    Allergy: undefined,
    Cuisine: undefined,
    Diet: undefined,
    SearchResult: { request: RecipeSearchRequest },
    RecipeDetails: undefined,
    Tab: undefined
};

export type WelcomeScreenProps = NativeStackScreenProps<NativeStackParamList, 'Welcome'>;
export type AllergyScreenProps = NativeStackScreenProps<NativeStackParamList, 'Allergy'>;
export type CuisineScreenProps = NativeStackScreenProps<NativeStackParamList, 'Cuisine'>;
export type DietScreenProps = NativeStackScreenProps<NativeStackParamList, 'Diet'>;
export type SearchResultScreenProps = NativeStackScreenProps<NativeStackParamList, 'SearchResult'>;
export type RecipeDetailsScreenProps = NativeStackScreenProps<NativeStackParamList, 'RecipeDetails'>;

export type TabParamList = {
    Explore: undefined,
    Home: undefined,
    Profile: undefined
};

export type ExploreScreenProps = NativeStackScreenProps<TabParamList, 'Explore'>;
export type HomeScreenProps = NativeStackScreenProps<TabParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<TabParamList, 'Profile'>;