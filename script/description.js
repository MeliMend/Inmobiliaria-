import {printcardbuy} from "../modules/printcard.js"
import Push from "../Helpers/post.js"


const container=document.querySelector(".container") 
let data=JSON.parse(localStorage.getItem("dataDescription")) 
printcardbuy(data,container) 


document.addEventListener("click",(e)=>{

 if(e.target.className=="btn btnDescrip btnCard"){
    let arrayc=JSON.parse(localStorage.getItem("datacar"))
    console.log("arrayc")
     
     let data=JSON.parse(localStorage.getItem("dataDescription")) 
     Push(arrayc,data)
     localStorage.setItem("datacar",JSON.stringify(arrayc) )
    }
    
})
document.addEventListener("click",(e)=>{

    if(e.target.className=="btn btnDescrip btnFavorite"){
       let arrayc=JSON.parse(localStorage.getItem("dataFavorites"))
       console.log("arrayc")
        
        let data=JSON.parse(localStorage.getItem("dataDescription")) 
        Push(arrayc,data)
        localStorage.setItem("dataFavorites",JSON.stringify(arrayc) )
       }
       
   })
