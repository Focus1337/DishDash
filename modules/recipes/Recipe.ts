export class Recipe {
    id: string;
    title: string;
    author: string;
    country: string;

    constructor(id: string, title: string, author: string, country: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.country = country;
    }
}