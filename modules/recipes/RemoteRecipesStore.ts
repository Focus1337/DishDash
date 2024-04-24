import RemoteRecipesService from "./RemoteRecipesService.ts";
import {makeAutoObservable} from "mobx";
import {Recipe} from "./models/Recipe.ts";
import {RecipeSearchRequest} from "./models/RecipeSearchRequest.ts";
import {CuisineType} from "../preferences/models/CuisineType.ts";

export class RemoteRecipesStore {
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

    actionHandleSearchRandom = async () => {
        this.setIsLoading(true);

        let res = await this.service.searchRandom();
        this.setRecipes(res);

        setTimeout(() => this.setIsLoading(false), 0);
    }

    actionHandleSearchByCuisine = async (cuisineType: CuisineType) => {
        this.setIsLoading(true);

        let res = await this.service.searchByCuisine(cuisineType);
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
