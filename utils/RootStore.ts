import React from "react";
import {RemoteRecipesStore} from "../modules/recipes/RemoteRecipesStore.ts";
import {PreferencesStore} from "../modules/preferences/PreferencesStore.ts";
import {Diet} from "../modules/preferences/models/Diet.ts";
import {CuisineType} from "../modules/preferences/models/CuisineType.ts";
import {Health} from "../modules/preferences/models/Health.ts";
import {ProfileStore} from "../modules/profile/ProfileStore.ts";
import {LocalRecipesStore} from "../modules/recipes/LocalRecipesStore.ts";

class RootStore {
    remoteRecipesStore: RemoteRecipesStore;
    localRecipesStore: LocalRecipesStore;
    dietStore: PreferencesStore<Diet>;
    cuisineStore: PreferencesStore<CuisineType>;
    healthStore: PreferencesStore<Health>;
    profileStore: ProfileStore;

    constructor() {
        this.remoteRecipesStore = new RemoteRecipesStore();
        this.localRecipesStore = new LocalRecipesStore();
        this.dietStore = new PreferencesStore<Diet>("diet");
        this.cuisineStore = new PreferencesStore<CuisineType>("cuisine");
        this.healthStore = new PreferencesStore<Health>("health");
        this.profileStore = new ProfileStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
