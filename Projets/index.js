const addbutton = document.getElementById("add")

addbutton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("nombre1").value)
    const num2 = parseFloat(document.getElementById("nombre2").value)
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat").innerHTML = "Veuillez entrer des nombres valides"
        return
    }
    const result = num1 + num2
    document.getElementById("resultat").innerHTML = result
})

const subbutton = document.getElementById("substract")

subbutton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("nombre1").value)
    const num2 = parseFloat(document.getElementById("nombre2").value)
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat").innerHTML = "Veuillez entrer des nombres valides"
        return
    }
    const result = num1 - num2
    document.getElementById("resultat").innerHTML = result
})

const multbutton = document.getElementById("multiply")

multbutton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("nombre1").value)
    const num2 = parseFloat(document.getElementById("nombre2").value)
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat").innerHTML = "Veuillez entrer des nombres valides"
        return
    }
    const result = num1 * num2
    document.getElementById("resultat").innerHTML = result
})

const divbutton = document.getElementById("divide")

divbutton.addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("nombre1").value)
    const num2 = parseFloat(document.getElementById("nombre2").value)
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultat").innerHTML = "Veuillez entrer des nombres valides"
        return
    }
    if (num2 == 0) {
        document.getElementById("resultat").innerHTML = "Division par 0 impossible"
        return
    }
    const result = num1 / num2
    document.getElementById("resultat").innerHTML = result
})

const resetbutton = document.getElementById("effacer")

resetbutton.addEventListener("click", function() {
    document.getElementById("nombre1").value = ""
    document.getElementById("nombre2").value = ""
    document.getElementById("resultat").innerHTML = ""
})

const Cart = document.getElementById("Panier"); 
const Pomme = document.getElementById("Pomme")

Pomme.addEventListener("click", function() {
    let newRow = Cart.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Pomme"
});

const Banane = document.getElementById("Banane")

Banane.addEventListener("click", function() {
    let newRow = Cart.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Banane"
})

const Orange = document.getElementById("Orange")

Orange.addEventListener("click", function() {
    let newRow = Cart.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Orange"
})

const Raisin = document.getElementById("Raisin")

Raisin.addEventListener("click", function() {
    let newRow = Cart.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Raisin"
})

const Poire = document.getElementById("Poire")

Poire.addEventListener("click", function() {
    let newRow = Cart.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Poire"
})

const Orangine = document.getElementById("Orangine")

Orangine.addEventListener("click", function() {
    let newRow = Cart.insertRow()
    let newCell = newRow.insertCell()
    newCell.innerHTML = "Orangine"
})

const RemoveItem = document.getElementById("Remove")

RemoveItem.addEventListener("click", function() {
    document.getElementById("Panier").innerHTML = ""
})

let promesse = new Promise((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => resolve("Opératon réussie"), 1000)
    } else {
        reject("Opération échouée")
    }
    })
    
function getFilmDescription(filmNumber) {
    fetch(`https://swapi.dev/api/films/${filmNumber}/`)
    .then(response => {
        if (!response.ok) {
              throw new Error('Erreur (films)');
            }
            return response.json();
          })
          .then(filmData => {
            // recupere les détails des persos de chaque film
            getCharactersDetails(filmData.characters);
    
            // met à jour le contenu de filmDescription
            document.getElementById('filmDescription').innerHTML = `
              <h2>${filmData.title}</h2>
              <p>${filmData.opening_crawl}</p>
            `
          })
      }
    
      // recupere et affiche les détails des persos
function getCharactersDetails(characterURLs) {
    characterURLs.forEach(url => {
        fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Erreur (persos)');
              }
              return response.json();
            })
            .then(characterData => {
              // ajoute les details du persos a filmDescription
              document.getElementById('filmDescription').innerHTML += `
                <h2>${characterData.name}</h2>
                <p><strong>Genre : </strong>${characterData.gender}</p>
                <p><strong>Année de naissance : </strong>${characterData.birth_year}</p>
                <hr>
              `
            })
        })
      }
    
      // associe la fonction à chaque bouton
document.getElementById('film1').addEventListener('click', function () {
    getFilmDescription(1);
});
    
document.getElementById('film2').addEventListener('click', function () {
    getFilmDescription(2);
});
    
document.getElementById('film3').addEventListener('click', function () {
     getFilmDescription(3);
});
    
document.getElementById('film4').addEventListener('click', function () {
    getFilmDescription(4);
});
    
document.getElementById('film5').addEventListener('click', function () {
    getFilmDescription(5);
});
    
document.getElementById('film6').addEventListener('click', function () {
    getFilmDescription(6);
});

console.log(addbutton)
console.log(subbutton)
console.log(multbutton)
console.log(divbutton)