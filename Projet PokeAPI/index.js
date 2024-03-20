const resultat = document.getElementById('resultat');
let currentIndex = 1;
let matchingPokemonNames = [];
let totalPokemonCount = 0;

fetchAndDisplayPokemon(currentIndex, currentIndex + 29);

const loadMoreButton = document.createElement('button');
loadMoreButton.textContent = 'Load more Pokémon';
loadMoreButton.className = 'load-more';
document.body.appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', () => {
    currentIndex += 30;
    fetchAndDisplayPokemon(currentIndex, currentIndex + 29);
});

let searchField = document.querySelector('input[name="search"]');
searchField.addEventListener('input', handleSearch);

function handleSearch() {
    let searchValue = searchField.value.trim().toLowerCase();

    if (searchValue === "") {
        resetSearch();
    } else {
        searchPerformed = true;
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
            .then(response => response.json())
            .then(data => {
                matchingPokemonNames = data.results.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchValue));
                updateDisplay(matchingPokemonNames);
                loadMoreButton.style.display = "none";
            });
    }
}

function resetSearch() {
    searchPerformed = false;
    resultat.innerHTML = "";
    currentIndex = 1;
    fetchAndDisplayPokemon(currentIndex, currentIndex + 29);
    loadMoreButton.style.display = "block";
}

function fetchAndDisplayPokemon(startIndex, endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => {
                createPokemonElement(data);
                totalPokemonCount++;
            });
    }
}

function createPokemonElement(data) {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.className = 'pokemon';

    const name = document.createElement('h2');
    name.textContent = capitalizeFirstLetter(data.name);
    pokemonDiv.appendChild(name);

    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.className = 'pokemon-sprite';
    pokemonDiv.appendChild(img);

    const number = document.createElement('p');
    number.textContent = `N° ${String(data.id).padStart(5, '0')}`;
    pokemonDiv.appendChild(number);

    const types = document.createElement('p');
    data.types.forEach(typeInfo => {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = capitalizeFirstLetter(typeInfo.type.name);
        typeSpan.className = 'pokemon-type';
        typeSpan.style.backgroundColor = getColorForType(typeInfo.type.name);
        types.appendChild(typeSpan);
    });
    pokemonDiv.appendChild(types);

    resultat.appendChild(pokemonDiv);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getColorForType(type) {
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

function updateDisplay(pokemonNames) {
    // Supprimer le contenu existant de resultat
    resultat.innerHTML = '';

    // Pour chaque Pokémon, créer un élément avec une animation d'apparition
    pokemonNames.forEach(pokemon => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    createPokemonElement(data);
                }, 100); // Décaler l'apparition de chaque Pokémon
            });
    });

    // Afficher ou masquer le bouton "Load more" en fonction du nombre total de Pokémon
    if (totalPokemonCount >= 1025) {
        loadMoreButton.style.display = "none";
    } else {
        loadMoreButton.style.display = "block";
    }
}

var mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

mybutton.onclick = function(event) {
  event.preventDefault(); 
  topFunction();
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
}
