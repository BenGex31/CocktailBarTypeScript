export interface Icocktail {
  name: string;
  image: any;
  ingredients: string[];
  liked: boolean;
}

export class Cocktail implements Icocktail {
  name;
  image;
  ingredients;
  liked;
  constructor(name: string, image: any, ingredients: string[], liked: boolean) {
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
    this.liked = liked;
  }
}
