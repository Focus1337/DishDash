import React from "react";
import {RecipesStore} from "../modules/recipes/RecipesStore.ts";

class RootStore {
    recipesStore: RecipesStore;

    constructor() {
        this.recipesStore = new RecipesStore();
    }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
