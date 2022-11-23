import get from "./getElement.js";
import showDrinks from "./showDrinks.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";
const defaultURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = get(".search-form");
const input = get('[name="drink"]');

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value;

  if(!value){
    showDrinks(URL)
  }
  
    let searchURL = `${defaultURL}${value}`;
    
    showDrinks(searchURL)
});
