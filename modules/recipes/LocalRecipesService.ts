import RecipesRepository from "./RecipesRepository.ts";
import {Recipe} from "./models/Recipe.ts";

export default class LocalRecipesService {
    private readonly recentRepository: RecipesRepository;
    private readonly likedRepository: RecipesRepository;

    constructor() {
        this.recentRepository = new RecipesRepository("recent-recipes");
        this.likedRepository = new RecipesRepository("liked-recipes");
    }

    getRecent = async (): Promise<Recipe[] | null> => {
        let recipes: Recipe[] = [];

        try {
            let result = await this.recentRepository.get();

            if (result === null) {
                return null;
            }

            recipes = JSON.parse(result);
            if (recipes === undefined) {
                return null;
            }

            return recipes;
        } catch (e) {
            console.log(e);
        }

        return recipes;
    };

    getLiked = async (): Promise<Recipe[] | null> => {
        let recipes: Recipe[] = [];

        try {
            let result = await this.likedRepository.get();

            if (result === null) {
                return null;
            }

            recipes = JSON.parse(result);
            if (recipes === undefined) {
                return null;
            }

            return recipes;
        } catch (e) {
            console.log(e);
        }

        return recipes;
    };

    saveAsRecent = async (recipe: Recipe) => {
        return await this.recentRepository.set(JSON.stringify(recipe));
    }

    saveAsLiked = async (recipe: Recipe) => {
        return await this.likedRepository.set(JSON.stringify(recipe));
    };

    removeFromLikes = async (recipe: Recipe) => {
    };

    removeAllRecent = async () => {
        await this.recentRepository.removeAll();
    };
}
