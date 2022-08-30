import {printcard} from "../modules/printcard.js"
const container=document.querySelector(".container")
document.addEventListener('DOMContentLoaded', async () => {
    const url="http://localhost:3000/propiedades"
    const {data}=await axios.get(url);
    localStorage.setItem("data",JSON.stringify(data) )
    let dataT=JSON.parse(localStorage.getItem("data"))
        container.innerHTML=""
    dataT.forEach((m)=>{  
    const {image,nombre,descripcion,habitaciones,baños,id}= m
    container.classList.add("dataT") 
    container.innerHTML += ` 
    <div class="card" style="width: 18rem;">
    <img src="${image}" height="200px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
     <p class="card-text">${descripcion}</p>
    <button type="button" id="${id}" class="btn btnDescrip" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Delete</button>
    </div>
    </div>
    
    ` 
    })
    })
    
    document.addEventListener("click",async(e)=>{
        
        if ( e.target.className=="btn btnDescrip") {
         axios.delete(`http://localhost:3000/propiedades/${e.target.id}`)
         const url="http://localhost:3000/propiedades"
         const {data}=await axios.get(url);
         localStorage.setItem("data",JSON.stringify(data) )
       } 
          
      })      
