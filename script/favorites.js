import {printFavorites} from "../modules/printcard.js"
import splice from "../modules/splice.js"
document.addEventListener('DOMContentLoaded',  () => {
    const container =document.getElementById("container")
    let data=JSON.parse(localStorage.getItem("dataFavorites"))
   
     printFavorites(data,container)
    
})
document.addEventListener("click",(e)=>{
if(e.target.className== "btn btnDescrip"){  
    let data=JSON.parse(localStorage.getItem("dataFavorites"))
    let iddelete= data.find(element=> element.id== e.target.id)
    splice(data,iddelete)
    localStorage.setItem("dataFavorites",JSON.stringify(data) )
    window.location.href="../pages/favorites.html"
}
else{}
})