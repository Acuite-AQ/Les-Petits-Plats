import { displayRecipes } from "./display.js";
import { recipes } from "./recipes.js";

const init = () => {
  displayRecipes(recipes);
}

init()