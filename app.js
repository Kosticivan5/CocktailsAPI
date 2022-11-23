const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

import showDrinks from "./utils/showDrinks.js";
import './utils/searchDrinks.js'

window.addEventListener("DOMContentLoaded", () => {
    showDrinks(URL);
    
});


