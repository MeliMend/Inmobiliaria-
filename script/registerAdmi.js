import añadirUser from "../Helpers/añadirUser.js";

const url="http://localhost:3000/userAdmi"
formInitA.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const {data}=await axios.get(url);
    console.log(data)
    let emailU=document.getElementById("email").value
    let passwordU=document.getElementById("password").value
    let key=document.getElementById("key").value
    const existe = data.some(user => user.email ===emailU )
    console.log(existe)
    if(existe==true){
        alert("Este usuario ya existe, por favor ingrese un email diferente")
    }
        
    if(existe==false){
        let userNew={
            id: crypto.randomUUID(),
            email: emailU,
            contraseña:passwordU
        }
        if(key =="true"){
           await añadirUser(url,userNew)
            }
        else{
            alert("La Key ingresada es incorrecta")
        }
        }
    
           
})


        