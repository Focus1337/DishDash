export enum Health {
    AlcoholCocktail = 'alcohol-cocktail',
    AlcoholFree = 'alcohol-free',
    CeleryFree = 'celery-free',
    CrustceanFree = 'crustacean-free',
    DairyFree = 'dairy-free',
    DASH = 'DASH',
    EggFree = 'egg-free',
    FishFree = 'fish-free',
    FODMAPFree = 'fodmap-free',
    GlutenFree = 'gluten-free',
    ImmunoSupportive = 'immuno-supportive',
    KetoFriendly = 'keto-friendly',
    KidneyFriendly = 'kidney-friendly',
    Kosher = 'kosher',
    LowPotassium = 'low-potassium',
    LowSugar = 'low-sugar',
    LupineFree = 'lupine-free',
    Mediterranean = 'Mediterranean',
    MolluskFree = 'mollusk-free',
    MustardFree = 'mustard-free',
    NoOilAdded = 'No-oil-added',
    Paleo = 'paleo',
    PeanutFree = 'peanut-free',
    Pescatarian = 'pecatarian',
    PorkFree = 'pork-free',
    RedMeatFree = 'red-meat-free',
    SesameFree = 'sesame-free',
    ShellfishFree = 'shellfish-free',
    SoyFree = 'soy-free',
    SugarConscious = 'sugar-conscious',
    SulfiteFree = 'sulfite-free',
    TreeNutFree = 'tree-nut-free',
    Vegan = 'vegan',
    Vegetarian = 'vegetarian',
    WheatFree = 'wheat-free',
}

export const healthOptions = Object.values(Health);

export function parseHealth(value: string): Health | undefined {
    return Object.values(Health).find(healthValue => healthValue === value);
}