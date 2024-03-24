import RecipesRepository from "./RecipesRepository.ts";
import {Recipe} from "./models/Recipe.ts";

export default class LocalRecipesService {
    private readonly recentRepository: RecipesRepository;
    private readonly savedRepository: RecipesRepository;

    constructor() {
        this.recentRepository = new RecipesRepository("recent-recipes");
        this.savedRepository = new RecipesRepository("saved-recipes");
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

    getSaved = async (): Promise<Recipe[] | null> => {
        let recipes: Recipe[] = [];

        try {
            let result = await this.savedRepository.get();

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

    setRecent = async (recipes: Recipe[]) => {
        return await this.recentRepository.set(JSON.stringify(recipes));
    }

    setSaved = async (recipes: Recipe[]) => {
        return await this.savedRepository.set(JSON.stringify(recipes));
    };

    removeSaved = async (recipe: Recipe) => {
        let res = await this.getSaved();

        let updated = res?.filter(x => x.uri != recipe.uri);
        await this.setSaved(updated ?? []);
    };

    removeRecent = async (recipe: Recipe) => {
        let res = await this.getRecent();

        let updated = res?.filter(x => x.uri != recipe.uri);
        await this.setRecent(updated ?? []);
    };
}
