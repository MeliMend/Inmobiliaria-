export const printcard =(data,container)=>{
    container.innerHTML=""
data.forEach((m)=>{  
const {image,nombre,descripcion,habitaciones,baños,id}= m
container.classList.add("data") 
container.innerHTML += ` 
<div class="card" style="width: 18rem;">
<img src="${image}" height="200px" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
 <p class="card-text">${descripcion}</p>
<button type="button" id="${id}" class="btn btnDescrip" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Description</button>
</div>
</div>

` 

})
}

 export const printcardbuy =(data,container)=>{
  container.innerHTML=""
 const {image,nombre,descripcion,libreria,king,juegos,medico,seguridad,parqueadero,inteligente,habitaciones,piscina,baños,id,precio,localizacion,disponibilidad,area}= data
container.classList.add("data") 
container.innerHTML += ` 
<div class="card" style="width: 18rem;">
<img src="${image}" height="200px" class="card-img-top" alt="...">
<div class="card-body">
<h2 class="card-title">${nombre}</h2>
<h4>Ubicado en: ${localizacion}</h4>
<h5 class="card-title">${"Area:"}<br>${area}${"Metros Cuadrados"}</h5>
<h5 class="card-title"> ${"Habitaciones:"}${habitaciones}</h5>
<h5 class="card-title"> ${"Baños:"}${baños}</h5>
<h5 class="card-title"> ${"Precio de " }${disponibilidad}${":"}<br>${precio}</h5>
<table class="table">
  <thead>
    <tr>
      <th id="titleTable" scope="col"><h4>Cuenta con:</h4></th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Piscina</th>
      <td class="table-success">${piscina}</td>
      
    </tr>
    <tr>
      <th scope="row" class="table-success">Inteligente</th>
      <td>${inteligente}</td>
      
    </tr>
    <tr>
    <th scope="row">Parqueadero</th>
    <td class="table-success">${parqueadero}</td>
    </tr>
    <tr>
    <th scope="row" class="table-success">Seguridad Privada</th>
    <td>${seguridad}</td>
    </tr>
    <tr>
    <th scope="row">Areá de Librería</th>
    <td class="table-success">${libreria}</td>
    </tr>
    <tr>
    <th scope="row" class="table-success">Centro Medico</th>
    <td>${medico}</td>
    </tr>
    <tr>
    <th scope="row">Zona de juegos para niños</th>
    <td class="table-success">${juegos}</td>
    </tr>
    <tr>
    <th scope="row" class="table-success">Camas King</th>
    <td>${king}</td>
    </tr>
    
    
  </tbody>
</table>
<p class="card-text">${descripcion}</p>
<button type="button" id="${id}" class="btn btnDescrip btnCard" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Add To Car</button>
<button type="button" id="${id}" class="btn btnDescrip btnFavorite" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Favorite</button>
</div>
</div>

` 


}
export const printcar =(data,container)=>{
  container.innerHTML=""
data.forEach((m)=>{  
const {image,nombre,descripcion,id}= m
container.classList.add("data") 
container.innerHTML += ` 
<div class="card" style="width: 18rem;">
<img src="${image}" height="200px" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${nombre}</h5>
<p class="card-text">${descripcion}</p>
<button type="button" id="${id}" class="btn btnDescrip" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Delete To car</button>
</div>
</div>

` 

})
}
export const printFavorites =(data,container)=>{
  container.innerHTML=""
data.forEach((m)=>{  
const {image,nombre,descripcion,id}= m
container.classList.add("data") 
container.innerHTML += ` 
<div class="card" style="width: 18rem;">
<img src="${image}" height="200px" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${nombre}</h5>
<p class="card-text">${descripcion}</p>
<button type="button" id="${id}" class="btn btnDescrip" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Delete To Favorites</button>
</div>
</div>

` 

})
}
