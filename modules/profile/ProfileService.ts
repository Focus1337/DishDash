import ProfileRepository from "./ProfileRepository.ts";

export default class ProfileService {
    private readonly repository: ProfileRepository;

    constructor() {
        this.repository = new ProfileRepository();
    }

    get = async (): Promise<Profile | null> => {
        let profile: Profile | null = null;

        try {
            let result = await this.repository.get();

            if (result === null) {
                return null;
            }

            profile = JSON.parse(result);
            if (profile === undefined) {
                return null;
            }

            return profile;
        } catch (e) {
            console.log(e);
        }

        return profile;
    };

    set = async (profile: Profile) => {
        return await this.repository.set(JSON.stringify(profile));
    };

    remove = async () => {
        return await this.repository.removeAll();
    };
}
