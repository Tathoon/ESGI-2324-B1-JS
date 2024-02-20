# Développement web : javascript, web api fetch et json

<u>B1 ESGI INI</u>

## Introduction à Javascript

Il faut utiliser Markdown (.md) pour documenter les projets en informatique.

### Rôle du Js

Executé par le navigateur web. Mettre à jour l'interface web sans avoir à contacter le serveur. 

Avec du Js on peux faire :
- du client lourd
- de l'application web
- du mobile

API fetch

Language orienté objet qui sert pour la majorité des applications web.

Javascript (script.js)

### Déclaration de variables en JS

- var : interdit de l'utiliser, peux être modifié et redéclaré
```js
var test = "test";
```
- let : on peut déclarer la variable qu'une seule fois
```js
let  test2 = "test"
```
- const : déclaration de constantes
```js
const test3 = "test"
```
### Sélectionner des Elements

- Par ID : 
```js
let element = document.getElementById("monId");
```

- Par Classe :
```js
let elements = document.getElementsByClassName("maClasse");
``` 

- Par Balise :
```js
let elements = document.getElementsByTagName("p");
```
### Modifier des Elements

- Changer le Texte :
```js
document.getElementById("monId").textContent = "Nouveau texte !";
```

- Changer le HTML interne : 
```js
document.getElementById("monId").innerHTML = "<span>Nouveau contenu HTML</span>";
```
### Ecouter et Réagir aux Evenements

- Ajouter un Ecouteur d'Evenements : 

```js
document.getElementById("monBouton").addEventListener("click", function () {
    alert("Bouton cliqué !");
});
```

### Callback

Fonction qui appelle une autre fonction

## Git

### Commandes de base Git

Initialiser Git dans le fichier : 

```bash
git init
```

Ajouter un fichier au suivi Git : 

```
git add <nom du fichier>
```

Ajouter tous les fichiers au suivi Git :

```
git add .
```
Pour valider les modifications et les ajouter à l'historique :

```
git commit -m "Message de validation"
```
Pour vérifier l'état du dépot :

```
git stats
```
