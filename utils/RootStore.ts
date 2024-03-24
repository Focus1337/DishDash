import React from "react";
import {RecipesStore} from "../modules/recipes/RecipesStore.ts";
import {PreferencesStore} from "../modules/preferences/PreferencesStore.ts";
import {Diet} from "../modules/preferences/models/Diet.ts";
import {CuisineType} from "../modules/preferences/models/CuisineType.ts";
import {Health} from "../modules/preferences/models/Health.ts";
import {ProfileStore} from "../modules/profile/ProfileStore.ts";

class RootStore {
    recipesStore: RecipesStore;
    dietStore: PreferencesStore<Diet>;
    cuisineStore: PreferencesStore<CuisineType>;
    healthStore: PreferencesStore<Health>;
    profileStore: ProfileStore;

    constructor() {
        this.recipesStore = new RecipesStore();
        this.dietStore = new PreferencesStore<Diet>("diet");
        this.cuisineStore = new PreferencesStore<CuisineType>("cuisine");
        this.healthStore = new PreferencesStore<Health>("health");
        this.profileStore = new ProfileStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
