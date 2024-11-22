import recipes from "./recipes.mjs";

function randomNumber(list) {
  return Math.floor(Math.random() * list.length);
}

function randomRecipe(list) {
  return list[randomNumber(list)];
}

function recipeTemplate(recipe) {
  return `<div class="recipe">
        <img class="food-img" src="${recipe.image}" alt="${recipe.name}" />
        <div class="tags">
            <ul>  
                ${tagsTemplate(recipe.tags)}
            </ul>
        </div>
        <p class="recipe-title">${recipe.name}</p>
        ${ratingTemplate(recipe.rating)}
        <p class="description hidden">
          ${recipe.description}
        </p>
        </div>`;
}

function tagsTemplate(tags) {
  // loop through the tags list and transform the strings to HTML
  let html = "";
  tags.forEach(function (tag) {
    let listItem = `<li>${tag}</li>`;
    html += listItem;
  });
  return html;
}

function ratingTemplate(rating) {
  // begin building an html string using the ratings HTML written earlier as a model.
  let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`;
  // our ratings are always out of 5, so create a for loop from 1 to 5
  for (let i = 1; i <= 5; i++) {
    // check to see if the current index of the loop is less than our rating
    if (i <= rating) {
      // if so then output a filled star
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
      // else output an empty star
    }
  }
  // after the loop, add the closing tag to our string
  html += `</span>`;
  // return the html string
  return html;
}

function renderRecipes(recipeList) {
  // get the element we will output the recipes into
  let recipeDiv = document.querySelector(".recipes");
  // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
  let html = "";
  recipeList.forEach(function (recipe) {
    html += recipeTemplate(recipe);
  });
  // Set the HTML strings as the innerHTML of our output element.
  recipeDiv.innerHTML = html;
}

function init() {
  // get a random recipe
  const recipe = randomRecipe(recipes);
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

const inputField = document.querySelector("input");

function searchHandler(event) {
    event.preventDefault();
    let query = inputField.value.toLowerCase();
    let filteredRecipes = filter(recipes, query);
    renderRecipes(filteredRecipes);
}

function filter(list, query) {
    function searchCallback(item) {
        return (
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.tags.find((tag) => tag.toLowerCase().includes(query)) ||
            item.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query))
        )
    }
    const filtered = list.filter(searchCallback);

    const sorted = filtered.sort((a, b) => a.name - b.name);
    return sorted
}

const search = document.querySelector(".search-icon");
search.addEventListener("click", searchHandler);

