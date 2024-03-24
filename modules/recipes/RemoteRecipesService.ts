import {ApiClient} from "../../utils/clients/apiClient.ts";
import {Recipe} from "./models/Recipe.ts";
import {RecipeSearchRequest} from "./models/RecipeSearchRequest.ts";
import {AxiosError} from "axios";
import {Alert} from "react-native";

export default class RemoteRecipesService {
    private readonly client: ApiClient;

    constructor() {
        this.client = new ApiClient();
    }

    searchRecipes = async (request: RecipeSearchRequest): Promise<Recipe[]> => {
        try {
            return await this.client.searchRecipes(request);
        } catch (e) {
            if (e instanceof AxiosError) {
                if (e.status === 401) {
                    Alert.alert("Not authorized: " + e);
                } else if (e.status === 403) {
                    Alert.alert("Request count limit: " + e);
                }
            }

            throw e;
        }
    };
}
