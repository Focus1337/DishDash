import {Recipe} from "./Recipe.ts";

export interface RecipeSearchResponse {
    from: number;
    to: number;
    count: number;
    _links: Links;
    hits: Hit[];
}

interface Links {
    self: Link;
    next?: Link;
}

interface Link {
    href: string;
    title?: string;
}

interface Hit {
    recipe: Recipe;
    _links: Links;
}