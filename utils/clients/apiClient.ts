import axios from "axios";
import {API_URL, APP_ID, APP_KEY} from "../env";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {RecipeSearchResponse} from "../../modules/recipes/models/RecipeSearchResponse.ts";

const apiClient = axios.create({
    baseURL: API_URL
});

apiClient.interceptors.request.use(config => {
    const params = new URLSearchParams(config.params || {});

    params.append('app_id', APP_ID);
    params.append('app_key', APP_KEY);

    config.params = params;
    return config;
}, error => {
    return Promise.reject(error);
});

export class ApiClient {
    searchRecipes = async (query: string): Promise<Recipe[]> => {
        try {
            const response = await axios.get<RecipeSearchResponse>(`${API_URL}`, {
                params: {
                    type: "public",
                    q: query,
                    app_id: APP_ID,
                    app_key: APP_KEY,
                },
            });

            return response.data.hits.map((hit) => hit.recipe);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
}

export default apiClient;