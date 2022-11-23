
const getElement = (selection)=>{
    const element = document.querySelector(selection)
    if(element){
        return element
    }
    throw new Error (`There has been an error, there is no such element as ${selection}`)
}


export default getElement