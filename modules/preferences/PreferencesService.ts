import PreferencesRepository from "./PreferencesRepository.ts";

export default class PreferencesService<T> {
    private readonly repository: PreferencesRepository;

    constructor(key: string) {
        this.repository = new PreferencesRepository(key);
    }

    get = async (): Promise<T[] | null> => {
        let preferences: T[] = [];

        try {
            let result = await this.repository.get();

            if (result === null) {
                return null;
            }

            preferences = JSON.parse(result);
            if (preferences === undefined) {
                return null;
            }

            return preferences;
        } catch (e) {
            console.log(e);
        }

        return preferences;
    };

    set = async (preferences: T[]) => {
        return await this.repository.set(JSON.stringify(preferences));
    };

    removeAll = async () => {
        return await this.repository.removeAll();
    };
}
