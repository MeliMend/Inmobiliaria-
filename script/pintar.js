import {printcard} from "../modules/printcard.js"

let data=JSON.parse(sessionStorage.getItem("data"))
 const container=document.querySelector(".container")
document.addEventListener('DOMContentLoaded', () => {
let data=JSON.parse(sessionStorage.getItem("data"))  
console.table(data)  
printcard(data,container)   


})
document.addEventListener("click",(e)=>{
    e.preventDefault()
    let idElement=e.target.id
    if(e.target.className=="btn btnDescrip"){
    let result= data.find(element=> element.id == idElement )
    localStorage.setItem("dataDescription",JSON.stringify(result) )   
    window.location.href="../pages/description.html"
    }
    
    

})
