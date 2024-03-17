export class Recipe {
    id: string;
    title: string;
    author: string;
    country: string;
    rating: number;

    constructor(id: string, title: string, author: string, country: string, rating: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.country = country;
        this.rating = rating;
    }
}