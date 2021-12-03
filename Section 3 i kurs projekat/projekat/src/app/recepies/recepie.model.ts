import { Ingredient } from "../shared/ingrediant.model";

export class Recepie{
  // public name:string;
  // public description:string;
  // public imagePath:string

  constructor(public name:string, public description:string, public imagePath:string, public ingredients:Ingredient[]){
    // this.name=name;
    // this.description=desc;
    // this.imagePath=imagePath
  }
}