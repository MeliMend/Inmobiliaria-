const list=document.getElementById("list")
const fragment = document.querySelector('#template').content;
const container=document.getElementById("contCheck")
const inteligente=document.getElementById('inteligente')
const selectBtn=document.getElementById('inputGroupSelect01')
const countryside=document.getElementById("countryside")
const btn=document.getElementById("botones")
const btnSearch1=document.getElementById("btnSearch1")
const containerCards=document.querySelector(".containerCards")



import {printcard} from "../modules/printcard.js"

document.addEventListener('DOMContentLoaded', async () => {
    const url="http://localhost:3000/propiedades"
    const {data}=await axios.get(url);
    sessionStorage.setItem("data",JSON.stringify(data) )
    localStorage.setItem("data",JSON.stringify(data) )
    localStorage.setItem("databtn",JSON.stringify(data) )
    printcard(data,containerCards)
    
          
})
btn.addEventListener("click",(e)=>{
    
    let  id= e.target.id;
    let data=JSON.parse(localStorage.getItem("data"))
    switch (id) {
        case 'sell':
           
           
            let datav= data.filter(data=> data.disponibilidad==="venta")
            
            sessionStorage.setItem("data",JSON.stringify(datav) )
        break;
        case 'buy':
            
        
            let datac= data.filter(data=> data.disponibilidad==="compra")
            sessionStorage.setItem("data",JSON.stringify(datac) )
        break;
        case 'rent':
            
            console.log("alquiler")
            let datar= data.filter(data=> data.disponibilidad==="alquiler")
            sessionStorage.setItem("data",JSON.stringify(datar) )
        break;

    }
    let databtn=JSON.parse(sessionStorage.getItem("data"))
    localStorage.setItem("databtn",JSON.stringify(databtn))
})
selectBtn.addEventListener("click",(e)=>{
    let  idSelect= e.target.value;
    
    
    let data=JSON.parse(localStorage.getItem("databtn"))
   
    switch (idSelect) {
        case '1':
           
            let datac= data.filter(data=> data.localizacion==="ciudad")
            sessionStorage.setItem("data",JSON.stringify(datac) )
        break;
        case '2':
            
            let dataC= data.filter(data=> data.localizacion==="campo")
            sessionStorage.setItem("data",JSON.stringify(dataC) )
        break;
        default:
            
            
        break;
   }
})

list.addEventListener('click',(e)=>{
       e.preventDefault()
    const clone = fragment.cloneNode(true);
    fragment.appendChild(clone);
    container.appendChild(fragment); 
 
})

container.addEventListener('change',(r)=>{     
    r.preventDefault()
    
    let iden=r.target.id
    let data=JSON.parse(sessionStorage.getItem("data"))
    
    switch (iden){
        
        case 'king':
            console.table(data)
            let dataI=data.filter(data=>  data.king==="si")
           
            console.log(iden)
            sessionStorage.setItem("data",JSON.stringify(dataI) )
        break;
        case 'inteligente':
            
            console.table(data)
            let dataK=data.filter(data=>  data.inteligente==="si")
            console.table(dataK)
            sessionStorage.setItem("data",JSON.stringify(dataK) ) 
         break; 
        case 'juegos':
            
            let dataf=data.filter(data=>  data.juegos==="si")
            sessionStorage.setItem("data",JSON.stringify(dataf) )
        break;
        case 'piscina':
            
            let datap=data.filter(data=>  data.piscina==="si")
            sessionStorage.setItem("data",JSON.stringify(datap) )
        break;
        case 'seguridad':
         
            let dataS=data.filter(data=>  data.seguridad==="si")
            sessionStorage.setItem("data",JSON.stringify(dataS) )
        break;
        case 'medico':
            
            let datam=data.filter(data=>  data.medico==="si")
            sessionStorage.setItem("data",JSON.stringify(datam) )
        break;
        case 'parqueadero':
            
            let dataP=data.filter(data=>  data.parqueadero==="si")
            sessionStorage.setItem("data",JSON.stringify(dataP) )
        break;
        case 'libreria':
            
            let datal=data.filter(data=>  data.libreria==="si")
            sessionStorage.setItem("data",JSON.stringify(datal) )
        break;
        default:
            alert("Select a category")
            window.location.href = '../index.html'
        break;

    }   
})

btnSearch1.addEventListener("click",(e)=>{
    let data=JSON.parse(sessionStorage.getItem("data"))
    if (data.length==0){
        alert("No hay resultados para tu busqueda")
        window.location.href='index.html'
        
    }
    else{
    window.location.href='pages/pintar.html'
    }
})
containerCards.addEventListener("click",(e)=>{
    e.preventDefault()
    let data=JSON.parse(localStorage.getItem("data"))
    let idElement=e.target.id
    if(e.target.className=="btn btnDescrip"){
    let result= data.find(element=> element.id == idElement )
    localStorage.setItem("dataDescription",JSON.stringify(result) )   
    window.location.href="../pages/description.html"
    }
})




