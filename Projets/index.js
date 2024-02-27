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
})

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


console.log(addbutton)
console.log(subbutton)
console.log(multbutton)
console.log(divbutton)