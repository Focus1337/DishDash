import {ApiClient} from "../../utils/clients/apiClient.ts";
import {Recipe} from "./models/Recipe.ts";
import {RecipeSearchRequest} from "./models/RecipeSearchRequest.ts";
import {CuisineType} from "../preferences/models/CuisineType.ts";

export default class RemoteRecipesService {
    private readonly client: ApiClient;

    constructor() {
        this.client = new ApiClient();
    }

    searchRecipes = async (request: RecipeSearchRequest): Promise<Recipe[]> => {
        try {
            return await this.client.searchRecipes(request);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    searchRandom = async (): Promise<Recipe[]> => {
        try {
            return await this.client.searchRandom();
        } catch (e) {
            console.log(e);
            throw e;
        }
    };

    searchByCuisine = async (cuisineType: CuisineType): Promise<Recipe[]> => {
        try {
            return await this.client.searchByCuisine(cuisineType);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };
}
