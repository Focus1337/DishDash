import RecipesService from "./RecipesService.ts";
import {makeAutoObservable} from "mobx";
import {Recipe} from "./models/Recipe.ts";

export class RecipesStore {
    private recipesService: RecipesService;
    isLoading = false;
    recipes: Recipe[] = [];

    constructor() {
        makeAutoObservable(this);
        this.recipesService = new RecipesService();
    }

    actionHandleGet(query: string) {
        this.setIsLoading(true);

        this.recipesService.searchRecipes(query)
            .then(res => {
                this.setRecipes(res);
            })
            .finally(() => {
                setTimeout(() => this.setIsLoading(false), 0);
            });
    }

    private setIsLoading(value: boolean) {
        this.isLoading = value;
    };

    private setRecipes(value: Recipe[]) {
        this.recipes = value;
    };
}
