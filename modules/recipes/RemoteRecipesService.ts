import {ApiClient} from "../../utils/clients/apiClient.ts";
import {Recipe} from "./models/Recipe.ts";
import {RecipeSearchRequest} from "./models/RecipeSearchRequest.ts";

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
}
