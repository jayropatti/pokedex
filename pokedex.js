
const pokemonCount = 151;
var pokedex = {}; // {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."   }}

window.onload = async function(){
    getPokemon(1);
}

async function getPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon" + num.toString();
    let res = await fetch(url); //wacht tot deze code eindigt en ga dan verder met de code 
    let pokemon = await res.json;
    console.log(pokemon);

}