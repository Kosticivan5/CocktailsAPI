import get from "./getElement.js";
import showDrinks from "./showDrinks.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";
const defaultURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = get(".search-form");
const input = get('[name="drink"]');

const sectionCenter = get('.section-center');
const title = get('.title')

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value;
  title.classList.add('hide')
  sectionCenter.classList.add('hide')
  if(!value){
    showDrinks(URL)
  }
    
    let searchURL = `${defaultURL}${value}`;
    
    showDrinks(searchURL)
});
