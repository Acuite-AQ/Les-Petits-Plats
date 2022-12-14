import { recipes } from "./recipes.js"

const recipeSectionElement = document.querySelector('.recipe')

const displayRecipes = (recipes) => {
    if (recipes) {
        if (recipes.length > 0) {
            for (let i = 0; i < recipes.length; i++) {
            recipeSectionElement.appendChild(createRecipeCard(recipes[i]))
            }
        } else {
            createErrorBox();
        }
    }
}

const createRecipeCard = (recipe) => {
    const card = document.createElement('div')
    card.setAttribute('class', 'recipe__card')
    const imageElement = document.createElement('div')
    imageElement.setAttribute('class', 'recipe__image')
    const textElement = document.createElement('div');
  textElement.setAttribute('class', 'recipe__text');
  const headerElement = document.createElement('div');
  headerElement.setAttribute('class', 'recipe__header');
  const h2Element = document.createElement('h2');
  h2Element.setAttribute('class', 'recipe__title');
  h2Element.textContent = recipe.name;
  const spanElement = document.createElement('span');
  spanElement.setAttribute('class', 'recipe__time');
  const iElement = document.createElement('i');
  iElement.setAttribute('class', 'fa-regular fa-clock');
  const strongElement = document.createElement('strong');
  strongElement.textContent = `${recipe.time} min`;
  spanElement.appendChild(iElement);
  spanElement.appendChild(strongElement);
  headerElement.appendChild(h2Element);
  headerElement.appendChild(spanElement);
  const detailsElement = document.createElement('div');
  detailsElement.setAttribute('class', 'recipe__details');
  const ingredientsElement = document.createElement('div');
  ingredientsElement.setAttribute('class', 'recipe__ingredients');
  const ingredientsListElement = document.createElement('ul');

  recipe.ingredients.forEach((ingredient) => {
    const listItemElement = document.createElement('li');
    const strongElement = document.createElement('strong');
    strongElement.textContent = ingredient.ingredient;
    listItemElement.appendChild(strongElement);
    // Add quantity if specified
    if (ingredient.quantity) {
      const spanElement = document.createElement('span');
      spanElement.textContent = `: ${ingredient.quantity}`;
      // Add unit if specified
      if (ingredient.unit) {
        // If unit is 'grammes' shorten it to 'g'
        if (ingredient.unit.toLowerCase() === 'grammes') {
          ingredient.unit = 'g';
        }
        // If unit is 'cuill??re(s) ?? soupe' shorten it to 'c. ?? s.'
        if (ingredient.unit.toLowerCase() === 'cuill??re ?? soupe' ||
          ingredient.unit.toLowerCase() === 'cuill??res ?? soupe') {
          ingredient.unit = 'c. ?? s.';
        }
        // If unit is 'cuill??re(s) ?? caf??' shorten it to 'c. ?? c.'
        if (ingredient.unit.toLowerCase() === 'cuill??re ?? caf??' ||
          ingredient.unit.toLowerCase() === 'cuill??res ?? caf??') {
          ingredient.unit = 'c. ?? c.';
        }
        // If unit is 'litre(s)' shorten it to 'l'
        if (ingredient.unit.toLowerCase() === 'litre' ||
          ingredient.unit.toLowerCase() === 'litres') {
          ingredient.unit = 'l';
        }
        spanElement.textContent += ` ${ingredient.unit}`;
      }
      listItemElement.appendChild(spanElement);
    }
    ingredientsListElement.appendChild(listItemElement);
  });
  ingredientsElement.appendChild(ingredientsListElement);
  const instructionsElement = document.createElement('p');
  instructionsElement.setAttribute('class', 'recipe__instructions');
  instructionsElement.textContent = recipe.description;
  detailsElement.appendChild(ingredientsElement);
  detailsElement.appendChild(instructionsElement);
  textElement.appendChild(headerElement);
  textElement.appendChild(detailsElement);
  card.appendChild(imageElement);
  card.appendChild(textElement);

  return card;
};

const createErrorBox = () => {
    const card = document.createElement('div');
    card.setAttribute('class', 'no-recipe__card');
    const informationElement = document.createElement('p');
    informationElement.setAttribute('class', 'no-recipe__infobox');
    informationElement.innerHTML = 'Aucune recette ne correspond ?? votre crit??re... vous pouvez chercher <span>?? tarte aux pommes ??,</span> <span>?? poisson ??,</span> etc.';
    card.appendChild(informationElement);
    recipeSectionElement.appendChild(card);
  };

export {displayRecipes}