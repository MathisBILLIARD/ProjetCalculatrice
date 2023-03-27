let display = document.getElementById("result");
let isResultDisplayed = false;
const MAX_DISPLAY_LENGTH = 16;

// le but remplacer les fonction js en les intégrant dans la class 
class BaseCalculator{

    constructor() {  
        display = document.getElementById("result"); // initialiser la propriété "display" de l'objet "BaseCalculator"
    }


    insert(num) {
        if (isResultDisplayed) { // si il y a un calcul précédent terminé 
            this.clearDisplay(); // this. permet de faire référence à la fonction de la classe BaseCalculator
            isResultDisplayed = false;
        }
   
        // Récupérer la chaîne de caractères actuelle de l'affichage
        var displayValue = display.textContent;
   
        // Vérifier si la longueur de la chaîne de caractères actuelle est supérieure à la taille maximale autorisée afin de ne pas du display
        if (displayValue.length >= MAX_DISPLAY_LENGTH) {
            return; // Empêcher l'utilisateur d'ajouter un autre caractère
        }

        display.innerHTML += num; /* ajoute le num au display */
    }


    clearDisplay() {
        display.innerHTML = ""; /* efface tout les caractères */
    }   
  
    backspace() {
        if(!isResultDisplayed){
            display.innerHTML = display.innerHTML.slice(0, -1); /*extrait tous les caractères de la chaîne et renvoie sans la derniere caractere*/
        }
    }

    calculate() {
        try { /* innerHTML permet d'accéder au contenu HTML d'un élément et de modifier son contenu.*/
            display.innerHTML = eval(display.innerHTML); /*  eval() est une fonction qui évalue une chaîne de caractères en tant que code JavaScript exécutable. */
        } catch (error) { /* try catch essaye d'executer la ligne sinn renvoie error */
            display.innerHTML = "Error";
        }
        isResultDisplayed = true; /* informe qu'un calcul a été exécuter afin d'effacer après*/
    }
}

let Calculator = new BaseCalculator(); // instancier la class 

