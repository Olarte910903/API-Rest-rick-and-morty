import {createComponent} from "./components.js";

const root = document.getElementById('root');

fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data =>{
  const results = data.results;
  results.forEach(character=>{
  const name = character.name;
  const img = character.image;
  const species = character.species;
  const gender = character.gender;
  const origin = character.origin.name;

  const component = createComponent(name,img,species,gender,origin);
  root.insertAdjacentHTML('beforeend', component);
  });
});




