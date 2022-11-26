import getDrinks from "./utils/getDrinks.js";
import displayDrink from "./utils/displaySingleDrink.js";
 



const singleDrink = async ()=>{
    const id = localStorage.getItem('id');

    if(!id){
        window.location.replace('index.html')
    }
    else{

        const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        const data = await getDrinks(URL)
        console.log(data);
       displayDrink(data)
    }
}


window.addEventListener('DOMContentLoaded',singleDrink)


