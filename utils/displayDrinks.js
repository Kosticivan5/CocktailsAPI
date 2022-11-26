import get from "./getElement.js"
import { hideLoading } from "./toggleLoading.js";


const displayDrinks = ({drinks})=>{
  const sectionCenter = get('.section-center');
  const title = get('.title')

  if(!drinks){
// hide preloader
    hideLoading()
    title.textContent = `Sorry we couldn't find cocktails with that name`;
    title.classList.remove('hide')
    sectionCenter.innerHTML = null
    return;
  }
  // sectionCenter.classList.remove('hide')
    const data = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: title, strDrinkThumb: img } = drink;
      return `<a href="./drink.html">
      <article class="cocktail" data-id="${id}">
      <img src="${img}" alt="${title}" />
      <h3>${title}</h3>
      </article>
      </a>`;
    })
    .join("");
    hideLoading()
    title.classList.add('hide')
    sectionCenter.classList.remove('hide')
    sectionCenter.innerHTML = data;
    return sectionCenter;
  
  
   
}

export default displayDrinks