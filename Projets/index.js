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

console.log(addbutton)
console.log(subbutton)
console.log(multbutton)
console.log(divbutton)