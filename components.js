export const createComponent = (name, img, species, gender, origin) =>{
  const component = `
<div class="container">
  <h1>${name}</h1>
  <img src=${img} alt="Rick And Morty character">
  <p class="especie">Especie: ${species}</p>
  <p class="genero">Genero: ${gender}</pcl>
  <p class="origen">Origen: ${origin}</p>
</div>
`
return component;
}

