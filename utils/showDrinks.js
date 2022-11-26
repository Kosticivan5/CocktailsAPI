import displayDrinks from "./displayDrinks.js";
import getDrinks from "./getDrinks.js";
import {showLoading, hideLoading} from "./toggleLoading.js"
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
showLoading()
  // get cocktails
  const data = await getDrinks(url)
  
  // display cocktails

  const section = await displayDrinks(data)
  
  // console.log(section);
  if (section){
    setDrink(section)
  }
};



export default showDrinks