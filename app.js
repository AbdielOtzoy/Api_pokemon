const url = 'https://pokeapi.co/api/v2/pokemon/';
const name = document.querySelector('.title-card');
const img = document.querySelector('.img-card');
const hp = document.querySelector('.hp-card');
const exp = document.querySelector('.exp-card');
const damage = document.querySelector('.damage');
const special = document.querySelector('.special');
const defence = document.querySelector('.defence');


const num = document.querySelector('numero');
const intRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

fetch(`${url}${intRandom(1, 151)}/`)
    .then(response => response.json() )
    .then(data => {

        const pokemon = {
            name: data.name,
            img: data.sprites.other.dream_world.front_default,
            hp: data.stats[0].base_stat,
            exp: data.base_experience,
            damage: data.stats[1].base_stat,
            special: data.stats[2].base_stat,
            defence: data.stats[1].base_stat,
            
        }
        name.textContent = pokemon.name;
        img.src = pokemon.img;
        hp.textContent = pokemon.hp + 'hp';
        exp.textContent = pokemon.exp + ' exp';
        damage.textContent = pokemon.damage + 'k';
        special.textContent = pokemon.special + 'k';
        defence.textContent = pokemon.defence + 'k';

        console.log(pokemon)

        console.log(data)
    })
    .catch(err => console.log(err))