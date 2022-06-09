
const pokemonCount = 151;
var pokedex = {}; // {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."   }}

window.onload = async function(){
    getPokemon(1);
    for (let i = 1; i <= pokemonCount; i++){
        await getPokemon(i);
    }
    console.log(pokedex);
}

async function getPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    let res = await fetch(url); //wacht tot deze code eindigt en ga dan verder met de code 
    let pokemon = await res.json();
    //console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["type"];
    let pokemonImage = pokemon["sprites"]["front_default"]; 

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();
    //console.log(pokemonDesc); 

    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"]

    pokedex[num] = {"name" : pokemonName, "img" : pokemonImage, "types" : pokemonType, "desc" : pokemonDesc}
}