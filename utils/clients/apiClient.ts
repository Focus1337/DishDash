import axios, {AxiosError} from "axios";
import {API_URL, APP_ID, APP_KEY} from "../env";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {RecipeSearchResponse} from "../../modules/recipes/models/RecipeSearchResponse.ts";
import {RecipeSearchRequest} from "../../modules/recipes/models/RecipeSearchRequest.ts";
import {CuisineType} from "../../modules/preferences/models/CuisineType.ts";

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
            const params = {
                type: request.type,
                q: request.q,
                health: request.health,
                diet: request.diet,
                cuisineType: request.cuisineType
            };

            console.log("Sending request to:", `${API_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, "with params", params);

            const response = await apiClient.get<RecipeSearchResponse>('', {
                params
            });

            console.log("Response:", response);

            return response.data.hits.map((hit) => hit.recipe);
        } catch (error) {
            console.error('Network or other error:', error);
            throw error;
        }
    };

    searchRandom = async (): Promise<Recipe[]> => {
        try {
            const params = {
                type: "any",
                q: 'bur',
                random: true
            };

            console.log("Sending request to:", `${API_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, "with params", params);

            const response = await apiClient.get<RecipeSearchResponse>('', {
                params
            });

            console.log("Response:", response);

            return response.data.hits.map((hit) => hit.recipe);
        } catch (error) {
            console.error('Network or other error:', error);
            throw error;
        }
    };

    searchByCuisine = async (cuisineType: CuisineType): Promise<Recipe[]> => {
        try {
            const params = {
                type: "any",
                cuisineType: cuisineType
            };

            console.log("Sending request to:", `${API_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, "with params", params);

            const response = await apiClient.get<RecipeSearchResponse>('', {
                params
            });

            console.log("Response:", response);

            return response.data.hits.map((hit) => hit.recipe);
        } catch (error) {
            console.error('Network or other error:', error);
            throw error;
        }
    };
}

export default apiClient;