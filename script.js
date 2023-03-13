let display = document.getElementById("result");
let isResultDisplayed = false;
const MAX_DISPLAY_LENGTH = 16;


function insert(num) {
    if (isResultDisplayed) { // si il y a un calcul précédent terminé 
        clearDisplay();
        isResultDisplayed = false;
    }
   
     // Récupérer la chaîne de caractères actuelle de l'affichage
     var displayValue = display.textContent;
   
     // Vérifier si la longueur de la chaîne de caractères actuelle est supérieure à la taille maximale autorisée afin de ne pas du display
     if (displayValue.length >= MAX_DISPLAY_LENGTH) {
       return; // Empêcher l'utilisateur d'ajouter un autre caractère
     }

     display.innerHTML += num;
}

function clearDisplay() {
    display.innerHTML = "";
}

function backspace() {
    if(!isResultDisplayed){
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
}

function calculate() {
    try { /* innerHTML permet d'accéder au contenu HTML d'un élément et de modifier son contenu.*/
        display.innerHTML = eval(display.innerHTML); /*  eval() est une fonction qui évalue une chaîne de caractères en tant que code JavaScript exécutable. */
    } catch (error) { /* try catch essaye d'executer la ligne sinn renvoie error */
        display.innerHTML = "Error";
    }
    isResultDisplayed = true; /* informe qu'un calcul a été exécuter afin d'effacer après*/
}







