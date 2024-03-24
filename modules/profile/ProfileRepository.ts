import LocalClient from "../../utils/clients/LocalClient.ts";

export default class ProfileRepository {
    private readonly localClient: LocalClient;
    private readonly key: string;

    constructor() {
        this.localClient = new LocalClient();
        this.key = "profile";
    }

    get = async () => {
        return await this.localClient.getAsync(this.key);
    };

    set = async (value: string) => {
        await this.localClient.setAsync(this.key, value);
    };

    removeAll = async () => {
        await this.localClient.removeAllAsync(this.key);
    };
}