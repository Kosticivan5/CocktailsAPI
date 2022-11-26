import get from "./getElement.js"
import {hideLoading} from './toggleLoading.js'

const displayDrink = (data)=>{
    hideLoading()
  const drink = data.drinks[0]
  console.log(drink);
  const {strDrink:name, strDrinkThumb:img,strInstructions:recipe} = drink

    const drinkContainer = get('.drink-container');
    const title = get('.desc__title');
    const ingredients = get('.ing');
    const recipes = get('.desc__recepie');
    const image = get('.drink-img');
    const list = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
    ]
    ingredients.innerHTML = list.map((ingredient)=>{

      if(ingredient != null){
        
        return`<li>${ingredient}</li>`
      }
    }).join('')
    document.title = name;
  title.textContent = name;
  recipes.textContent = recipe;
  image.src = img


}




export default displayDrink