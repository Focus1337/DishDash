import {makeAutoObservable} from "mobx";
import PreferencesService from "./PreferencesService.ts";

export class PreferencesStore<T> {
    private service: PreferencesService<T>;
    items: T[] | null = null;

    constructor(key: string) {
        makeAutoObservable(this);
        this.service = new PreferencesService<T>(key);
    }

    actionHandleGet = async () => {
        let prev = await this.service.get();

        this.setItems(prev);
    };

    actionHandleAdd = async (items: T[]) => {
        const prev = await this.service.get() || [];
        const newItemsSet = new Set([...prev, ...items]);

        await this.service.set([...newItemsSet]);
        await this.actionHandleGet();
    };

    actionHandleRemoveAll = async () => {
        await this.service.removeAll();
        await this.actionHandleGet();
    };

    actionHandleForceAdd = async (items: T[]) => {
        await this.actionHandleRemoveAll();
        await this.actionHandleAdd(items);
    };

    private setItems(value: T[] | null) {
        this.items = value;
    };
}
