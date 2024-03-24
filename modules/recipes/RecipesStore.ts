import RemoteRecipesService from "./RemoteRecipesService.ts";
import {makeAutoObservable} from "mobx";
import {Recipe} from "./models/Recipe.ts";
import {RecipeSearchRequest} from "./models/RecipeSearchRequest.ts";

export class RecipesStore {
    private service: RemoteRecipesService;
    isLoading = false;
    recipes: Recipe[] = [];

    constructor() {
        makeAutoObservable(this);
        this.service = new RemoteRecipesService();
    }

    actionHandleSearch(request: RecipeSearchRequest) {
        this.setIsLoading(true);

        this.service.searchRecipes(request)
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
