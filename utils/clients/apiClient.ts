import axios, {AxiosError} from "axios";
import {API_URL, APP_ID, APP_KEY} from "../env";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {RecipeSearchResponse} from "../../modules/recipes/models/RecipeSearchResponse.ts";
import {RecipeSearchRequest} from "../../modules/recipes/models/RecipeSearchRequest.ts";

const apiClient = axios.create({
    baseURL: API_URL
});

apiClient.interceptors.request.use(config => {
    const params = new URLSearchParams(config.params || {});

    params.append('app_id', APP_ID);
    params.append('app_key', APP_KEY);

    config.params = params;
    return config;
}, error => console.log(error));

export class ApiClient {
    searchRecipes = async (request: RecipeSearchRequest): Promise<Recipe[]> => {
        try {
            const params: { [key: string]: any } = {
                type: request.type,
                q: request.q,
                ...(request.diet && {diet: request.diet.join(',')}),
                ...(request.health && {health: request.health.join(',')}),
                ...(request.cuisineType && {cuisineType: request.cuisineType.join(',')}),
            };

            const response = await apiClient.get<RecipeSearchResponse>('', {
                params: params,
            });

            return response.data.hits.map((hit) => hit.recipe);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(error.request);
                console.error(error.response!.data);
                console.error('Network or other error:', error);
            }
            throw error;
        }
    };
}

export default apiClient;