export enum CuisineType {
    American = 'american',
    Asian = 'asian',
    British = 'british',
    Caribbean = 'caribbean',
    CentralEurope = 'central europe',
    Chinese = 'chinese',
    EasternEurope = 'eastern europe',
    French = 'french',
    Greek = 'greek',
    Indian = 'indian',
    Italian = 'italian',
    Japanese = 'japanese',
    Korean = 'korean',
    Kosher = 'kosher',
    Mediterranean = 'mediterranean',
    Mexican = 'mexican',
    MiddleEastern = 'middle eastern',
    Nordic = 'nordic',
    SouthAmerican = 'south american',
    SouthEastAsian = 'south east asian',
    World = 'world'
}

export const cuisineOptions = Object.values(CuisineType);

export function parseCuisine(value: string): CuisineType | undefined {
    return Object.values(CuisineType).find(cuisineValue => cuisineValue === value);
}