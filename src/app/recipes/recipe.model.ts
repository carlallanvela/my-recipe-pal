export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // So we can instantiate this class with the
  // new keyword.
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
