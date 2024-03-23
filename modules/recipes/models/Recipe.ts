import {DigestEntry} from "./DigestEntry.ts";
import {NutrientsInfo} from "./NutrientsInfo.ts";
import {DishType} from "./DishType.ts";
import {MealType} from "./MealType.ts";
import {CuisineType} from "../../preferences/models/CuisineType.ts";

export interface Recipe {
    uri: string;
    label: string;
    image: string;
    images?: ImageInfo;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredient[];
    calories: number;
    glycemicIndex?: number;
    inflammatoryIndex?: number;
    totalCO2Emissions?: number;
    co2EmissionsClass?: string;
    totalWeight: number;
    totalTime: number;
    cuisineType: CuisineType[];
    mealType: MealType[];
    dishType: DishType[];
    totalNutrients?: NutrientsInfo;
    totalDaily?: NutrientsInfo;
    digest: DigestEntry[];
}