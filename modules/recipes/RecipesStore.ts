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

    actionHandleSearch = async (request: RecipeSearchRequest) => {
        this.setIsLoading(true);

        let res = await this.service.searchRecipes(request);
        this.setRecipes(res);

        setTimeout(() => this.setIsLoading(false), 0);
    }

    private setIsLoading(value: boolean) {
        this.isLoading = value;
    };

    private setRecipes(value: Recipe[]) {
        this.recipes = value;
    };
}
