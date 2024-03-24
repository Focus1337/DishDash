export enum Diet {
    Balanced = 'balanced',
    HighFiber = 'high-fiber',
    HighProtein = 'high-protein',
    LowCarb = 'low-carb',
    LowFat = 'low-fat',
    LowSodium = 'low-sodium'
}

export const dietOptions = Object.values(Diet);

export function parseDiet(value: string): Diet | undefined {
    return Object.values(Diet).find(dietValue => dietValue === value);
}