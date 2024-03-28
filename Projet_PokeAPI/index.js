const resultat = document.getElementById('resultat');                      // recupere l'element resultat dans le html 
let currentIndex = 1;                                                      // index de depart pour la requete api
let matchingPokemonNames = [];                                             // tableau pour stocker les noms des pokemons qui correspondent a la recherche
let totalPokemonCount = 0;                                                 // nombre total de pokemons affiches

fetchAndDisplayPokemon(currentIndex, currentIndex + 29);                   // appel de la fonction pour afficher les 30 premiers pokemons

const loadMoreButton = document.createElement('button');                   // creation du bouton pour charger plus de pokemons
loadMoreButton.textContent = 'Load more Pokémon';
loadMoreButton.className = 'load-more';
document.body.appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', () => {                           // ajoute un ecouteur d'evenement sur le bouton pour charger plus de pokemons
    currentIndex += 30;
    fetchAndDisplayPokemon(currentIndex, currentIndex + 29);               // appel de la fonction pour afficher les 30 pokemons suivants
});

let searchField = document.querySelector('input[name="search"]');          // recupere l'element input dans le html
searchField.addEventListener('input', handleSearch);

function handleSearch() {                                                  // fonction pour gerer la recherche de pokemons
    let searchValue = searchField.value.trim().toLowerCase();              // recupere la valeur de l'input et la met en minuscule

    if (searchValue === "") {                                              // si la valeur de l'input est vide reinitialise la recherche avec resetSearch()
        resetSearch();
    } else {
        searchPerformed = true;                                            // variable pour savoir si une recherche a ete effectuee
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')              // requete api pour recuperer les noms des pokemons avec comme limite 1025 (le nombre total de pokemons)
            .then(response => response.json())                             // convertit la reponse en json
            .then(data => {
                matchingPokemonNames = data.results.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchValue)); // filtre les noms des pokemons qui correspondent a la recherche
                updateDisplay(matchingPokemonNames);                       // appel de la fonction pour afficher les pokemons qui correspondent a la recherche
                loadMoreButton.style.display = "none";                     // cache le bouton pour charger plus de pokemons (pour pas pouvoir charger plus de pokemons qui ne correspondent pas a la recherche)
            });
    }
}

function resetSearch() {                                                   // fonction pour reinitialiser la recherche (pour que quand on arrete de rechercher on remet les 30 premiers pokemons)
    searchPerformed = false;
    resultat.innerHTML = "";
    currentIndex = 1;
    fetchAndDisplayPokemon(currentIndex, currentIndex + 29);
    loadMoreButton.style.display = "block";
}

async function fetchAndDisplayPokemon(startIndex, endIndex) {             // fonction pour recuperer les pokemons et les afficher
    for (let i = startIndex; i <= endIndex; i++)                          // boucle pour recuperer les pokemons de l'index de depart a l'index d'arrivee   
    {
        const query = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`) 
        const pokemon = await query.json();
        createPokemonElement(pokemon);
        totalPokemonCount++;
    }
}

function createPokemonElement(data) {                                      // fonction pour creer une class pokemon
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'pokemon';

    const name = document.createElement('h2');                             // creation du nom du pokemon et l'attribue a la class pokemon
    name.textContent = capitalizeFirstLetter(data.name);
    pokemonDiv.appendChild(name);

    const img = document.createElement('img');                             // creation de l'image du pokemon l'attribue a la class pokemon
    img.src = data.sprites.front_default;
    img.className = 'pokemon-sprite';
    pokemonDiv.appendChild(img);

    const number = document.createElement('p');                            // creation du numero du pokemon l'attribue a la class pokemon
    number.textContent = `N° ${String(data.id).padStart(5, '0')}`;
    pokemonDiv.appendChild(number);

    const types = document.createElement('p');                             // creation des types du pokemon l'attribue a la class pokemon
    data.types.forEach(typeInfo => {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = capitalizeFirstLetter(typeInfo.type.name);  // met en majuscule la premiere lettre du type (pour que ca soit plus beau)
        typeSpan.className = 'pokemon-type';
        typeSpan.style.backgroundColor = getColorForType(typeInfo.type.name);
        types.appendChild(typeSpan);
    });
    pokemonDiv.appendChild(types);

    const description = document.createElement('p');                       // creation de la description du pokemon l'attribue a la class pokemon
    description.textContent = data.description;
    pokemonDiv.appendChild(description);

    pokemonDiv.addEventListener('click', () => {
        window.location.href = `pokemon.html?id=${data.id}&name=${capitalizeFirstLetter(data.name)}&description=${data.description}&image=${data.sprites.front_default}&types=${data.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join(',')}`;
    });

    resultat.appendChild(pokemonDiv);                                     // ajoute la class pokemon a l'element resultat
}

function capitalizeFirstLetter(string) {                                  // fonction pour mettre en majuscule la premiere lettre d'un mot (on l'utilise pour les types des pokemons)
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getColorForType(type) {                                          // fonction pour attribuer une couleur a chaque type de pokemon
    const typeColorMapping = {
        fire: '#F08030',
        grass: '#78C850',
        electric: '#F8D030',
        water: '#6890F0',
        ground: '#E0C068',
        rock: '#B8A038',
        fairy: '#EE99AC',
        poison: '#A040A0',
        bug: '#A8B820',
        dragon: '#7038F8',
        psychic: '#F85888',
        flying: '#A890F0',
        fighting: '#C03028',
        normal: '#A8A878'
    };
    return typeColorMapping[type] || '#68A090'; 
}

function updateDisplay(pokemonNames) {                                    // fonction pour afficher les pokemons qui correspondent a la recherche
    resultat.innerHTML = '';

    pokemonNames.forEach(pokemon => {                                     // boucle pour recuperer les pokemons qui correspondent a la recherche
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    createPokemonElement(data);
                }, 100);
            });
    });

    if (totalPokemonCount >= 1025) {                                      // si le nombre total de pokemons affiches est superieur ou egal a 1025 (le nombre total de pokemons) cache le bouton pour charger plus de pokemons
        loadMoreButton.style.display = "none";
    } else {
        loadMoreButton.style.display = "block";
    }
}

var mybutton = document.getElementById("backToTopBtn");                  // recupere l'element backToTopBtn dans le html
window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {                                              // fonction pour afficher/cacher le bouton pour remonter en haut de la page
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

mybutton.onclick = function(event) {                                     // fonction pour remonter en haut de la page
  event.preventDefault(); 
  topFunction();
};

function topFunction() {                                               // fonction pour remonter en haut de la page et que ça soit smooth
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
}

const BackgroundMusicPoke = document.getElementById("background-music");    // Sélectionne l'élément audio

BackgroundMusicPoke.volume = 0.021;                                         // Baisse le volume à 0.1

function playBackgroundMusic() {                                            // Fonction pour jouer la musique en boucle
    BackgroundMusicPoke.currentTime = 0;                                    // Réinitialise la musique au début
    BackgroundMusicPoke.play();                                             // Joue la musique
}

BackgroundMusicPoke.addEventListener('ended', playBackgroundMusic);         // Écoute l'événement 'ended' pour réinitialiser et lire à nouveau la musique en boucle

playBackgroundMusic();                                                      // Joue la musique pour la première fois

function applyTypeColors(types) {
    const typeDiv = document.createElement('div');

    types.split(',').forEach(type => {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = type.trim();
        typeSpan.className = 'pokemon-type';
        typeSpan.style.backgroundColor = getColorForType(type.trim().toLowerCase());
        typeDiv.appendChild(typeSpan);
    });

    return typeDiv;
}