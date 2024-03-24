import axios, {AxiosError} from "axios";
import {API_URL, APP_ID, APP_KEY} from "../env";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {RecipeSearchResponse} from "../../modules/recipes/models/RecipeSearchResponse.ts";
import {RecipeSearchRequest} from "../../modules/recipes/models/RecipeSearchRequest.ts";

const apiClient = axios.create({
    baseURL: API_URL,
    paramsSerializer: params => {
        const searchParams = new URLSearchParams();

        searchParams.append('app_id', APP_ID);
        searchParams.append('app_key', APP_KEY);

        Object.entries(params).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(item => searchParams.append(key, item));
            } else if (value !== undefined) {
                searchParams.append(key, value);
            }
        });

        return searchParams.toString();
    }
});

export class ApiClient {
    searchRecipes = async (request: RecipeSearchRequest): Promise<Recipe[]> => {
        try {
            const response = await apiClient.get<RecipeSearchResponse>('', {
                params: {
                    type: request.type,
                    q: request.q,
                    health: request.health,
                    diet: request.diet,
                    cuisineType: request.cuisineType
                },
            });

            console.log(response.request);

            let result = response.data.hits.map((hit) => hit.recipe);

            console.log(result);

            return result;
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error('Network or other error:', error.response?.data);
            }
            throw error;
        }
    };
}

export default apiClient;