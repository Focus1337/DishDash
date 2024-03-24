import {MealType} from "./MealType.ts";
import {Diet} from "../../preferences/models/Diet.ts";
import {Health} from "../../preferences/models/Health.ts";
import {CuisineType} from "../../preferences/models/CuisineType.ts";
import {DishType} from "./DishType.ts";

export interface RecipeSearchRequest {
    type: 'public' | 'user' | 'any';
    beta?: boolean;
    q: string; // Обязателен, если не указаны другие параметры
    EdamamAccountUser?: string;
    ingr?: string;
    diet?: Array<Diet>;
    health?: Array<Health>;
    cuisineType?: Array<CuisineType>;
    mealType?: Array<MealType>;
    dishType?: Array<DishType>;
    calories?: string;
    time?: string;
    imageSize?: Array<'LARGE' | 'REGULAR' | 'SMALL' | 'THUMBNAIL'>;
    excluded?: Array<string>;
    random?: boolean;
    nutrients?: NutrientsRequest;
    field?: Array<string>;
    co2EmissionsClass?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    tag?: Array<string>;
    sysTag?: Array<'live'>;
    AcceptLanguage?: string;
}

interface NutrientsRequest {
    [key: string]: string; // Пример: "CA": "50+", "FAT": "30", "FIBTG": "5-10"
}
