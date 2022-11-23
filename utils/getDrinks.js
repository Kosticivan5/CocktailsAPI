import { showLoading } from "./toggleLoading.js";

const getDrinks = async (url) => {
  showLoading()
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data
  } catch (error) {
    console.log(`there has been an ${error}`);
  }
};


export default getDrinks