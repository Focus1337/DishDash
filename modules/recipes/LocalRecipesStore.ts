import {makeAutoObservable} from "mobx";
import LocalRecipesService from "./LocalRecipesService.ts";
import {Recipe} from "./models/Recipe.ts";

export class LocalRecipesStore {
    private service: LocalRecipesService;
    recent: Recipe[] | null = null;
    saved: Recipe[] | null = null;

    constructor() {
        makeAutoObservable(this);
        this.service = new LocalRecipesService();
    }

    actionHandleGetSaved = async () => {
        let prev = await this.service.getSaved();

        this.setSaved(prev);
    };

    actionHandleGetRecent = async () => {
        let prev = await this.service.getRecent();
        console.log(prev);

        this.setRecent(prev);
    };

    actionHandleAddSaved = async (item: Recipe) => {
        const prev = await this.service.getSaved() || [];
        const newItemsSet = new Set([...prev, item]);

        await this.service.setSaved([...newItemsSet]);
        await this.actionHandleGetSaved();
    };

    actionHandleRemoveSaved = async (recipe: Recipe) => {
        await this.service.removeSaved(recipe);
        await this.actionHandleGetSaved();
    };

    actionHandleAddRecent = async (recipe: Recipe) => {
        let prev = await this.service.getRecent() || [];

        if (!prev.some(r => r.uri === recipe.uri)) {
            await this.service.setRecent([...prev, recipe]);
        } else {
            await this.service.removeRecent(recipe);
            await this.service.setRecent([...prev, recipe]);
        }

        await this.actionHandleGetSaved();
    };

    private setSaved(value: Recipe[] | null) {
        this.saved = value;
    };

    private setRecent(value: Recipe[] | null) {
        this.recent = value;
    };
}
