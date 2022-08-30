const user=document.getElementById("user")
const adm=document.getElementById("adm")
const container=document.getElementById("containerForm")
const btnSign=document.getElementById("btnSign")
const formInitA=document.getElementById("formInitA")
const urluser="http://localhost:3000/user"
const urlAdmi="http://localhost:3000/userAdmi"
const arrayc=[]
const arrayFavorites=[]
localStorage.setItem("datacar",JSON.stringify(arrayc) ) 
localStorage.setItem("dataFavorites",JSON.stringify(arrayFavorites) ) 


document.addEventListener("DOMContentLoaded",()=>{
    alert("Selecciona bajo que perfil quieres ingresar")
})

user.addEventListener("click",(u)=>{
       
formInitA.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const {data}=await axios.get(urluser);
    console.log(data)
    let emailU=document.getElementById("email").value
    let passwordU=document.getElementById("password").value
    const existe = data.some(user => user.email ===emailU && user.contraseña===passwordU )
    console.log(existe)
    if(existe==true){
        window.location.href="../index.html"
    }
    if(existe==false){
        alert("Usuario o contraseña incorrectos")
    }
       
})
})
adm.addEventListener("click",(u)=>{
   formInitA.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const {data}=await axios.get(urlAdmi);
    console.log(data)
    let emailU=document.getElementById("email").value
    let passwordU=document.getElementById("password").value
    const existe = data.some(user => user.email ===emailU && user.contraseña===passwordU )
   
    if(existe==true){
        window.location.href="../pages/administrator.html"
    }
    if(existe==false){
        alert("Usuario o contraseña incorrectos")
    }
       
})
})
