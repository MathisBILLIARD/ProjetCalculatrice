let display = document.getElementById("result");
let isResultDisplayed = false;
let previousCalcul = [];
const MAX_DISPLAY_LENGTH = 16;
// le but remplacer les fonction js en les intégrant dans la class
class BaseCalculator{
	constructor() {  
    	display = document.getElementById("result"); // initialiser la propriété "display" de l'objet "BaseCalculator"
    	this.startTime = null;
    	if(this.startTime == null){
        	this.startTime = Date.now();
    	}
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
    	display.innerHTML += num; // ajoute le num au display
	}



	clearDisplay() {
    	display.innerHTML = ""; // efface tout les caractères
        	this.startTime = Date.now();
	}   
  
	backspace() {
    	if(!isResultDisplayed){
        	display.innerHTML = display.innerHTML.slice(0, -1); //extrait tous les caractères de la chaîne et renvoie sans la derniere caractere
    	}
	}
	calculate() {
    	try { // innerHTML permet d'accéder au contenu HTML d'un élément et de modifier son contenu.
        	display.innerHTML = eval(display.innerHTML); //  eval() est une fonction qui évalue une chaîne de caractères en tant que code JavaScript exécutable.
    	} catch (error) { // try catch essaye d'executer la ligne sinn renvoie error
        	display.innerHTML = "Error";
    	}
    	previousCalcul.push(display.innerHTML);
    	console.log(previousCalcul);
    	isResultDisplayed = true; // informe qu'un calcul a été exécuter afin d'effacer après
    	const temps = Date.now() - this.startTime;
    	this.sendTimeTaken(temps);
	}
	historyCalcul(){
    	this.clearDisplay();
    	if(previousCalcul.length != 0){
        	display.innerHTML = previousCalcul[previousCalcul.length -1];
        	previousCalcul.pop();
    	}
     
    	console.log(previousCalcul);  
	}



	sendTimeTaken(timeTaken) {
    	let date1 = new Date();
    	let dateLocale = date1.toLocaleString('fr-FR',{
        	year: 'numeric',
        	month: 'numeric',
        	day: 'numeric',
        	hour: 'numeric',
        	minute: 'numeric',
        	second: 'numeric'});





			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			
			var raw = JSON.stringify({
			  "id": 1,
			  "timeTakenMs": timeTaken,
			  "created_at": dateLocale,
			});
			
			var requestOptions = {
			  method: 'POST',
			  headers: myHeaders,
			  body: raw,
			  redirect: 'follow'
			};
			
			fetch("http://localhost:3000/calculatrice", requestOptions)
			  .then(response => response.text())
			  .then(result => console.log(result))
			  .catch(error => console.log('error', error));
}
}
let Calculator = new BaseCalculator(); // instancier la class

