import {ApiClient} from "../../utils/clients/apiClient.ts";
import {Recipe} from "./models/Recipe.ts";

export default class RecipesService {
    private readonly client: ApiClient;

    constructor() {
        this.client = new ApiClient();
    }

    searchRecipes = async (query: string): Promise<Recipe[]> => {
        try {
            return await this.client.searchRecipes(query);
        } catch (e) {
            console.log(e);
            throw e;
        }
    };
}
