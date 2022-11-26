
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';



const setDrink = (section)=>{
    section.addEventListener('click', function(e){
        // e.preventDefault()
        const id = e.target.parentElement.dataset.id
        localStorage.setItem('id', id)
        console.log(id);
        
    })
}


export default setDrink;