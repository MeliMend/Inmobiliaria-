import añadirUser from "../Helpers/añadirUser.js";

const url="http://localhost:3000/user"
formInitA.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const {data}=await axios.get(url);
    console.log(data)
    let emailU=document.getElementById("email").value
    let passwordU=document.getElementById("password").value
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
                   await añadirUser(url,userNew)
            }
       
        
    
           
})