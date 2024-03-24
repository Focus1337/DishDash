import {makeAutoObservable} from "mobx";
import ProfileService from "./ProfileService.ts";

export class ProfileStore {
    private service: ProfileService;
    profile: Profile | null = null;

    constructor() {
        makeAutoObservable(this);
        this.service = new ProfileService();
    }

    actionHandleGet = async () => {
        let result = await this.service.get();

        this.setProfile(result);
    };

    actionHandleAdd = async (profile: Profile) => {
        await this.service.set(profile);
        await this.actionHandleGet();
    };

    actionHandleRemove = async () => {
        await this.service.remove();
        await this.actionHandleGet();
    };

    private setProfile(value: Profile | null) {
        this.profile = value;
    };
}
