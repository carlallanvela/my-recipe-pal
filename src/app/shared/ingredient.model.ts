export class Ingredient {
  constructor(public name: string, public amount: number) {
    // Behind the scenes, it will do the following:
    // this.name = name;
    // this.amount = amount as if
    // we've declared the public fields outside the constructor
    // and initialized it inside the constructor.
  }
}
