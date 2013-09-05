//Fonction d'ajout d'un nouvel element
function doAddItem(e){
  var data = {
	"label": $.itemField.value, //libelle est recupéré depuis un TextField declaré dans index.xml
	"done": false};
	var tache = Alloy.createModel('tache', data); //creation de l'instance du model 
	tache.save(); //persist de l'objet en base de données
	alert($.itemField.value+" a été ajouté a la liste");
}
//fonction de recuperation de la liste
function doShowList(e) {
	var taches = Alloy.createCollection('tache');//creation d'une Collection de tache 
	taches.fetch();//synchronisation de la collection avec la base de données
	taches.each(function(tache){
		alert('la tache '+tache.get('label')+' est '+ (tache.get('done')?'faite':'en cours')); //affichage d'un item de la collection
	});
}
//fonction de suppression de la liste
function doClear(e){
	var taches = Alloy.createCollection('tache');
	taches.fetch();
	while(taches.length) { 
    	taches.at(0).destroy();//suppression des taches une par une
	}	
	alert("liste des tâches vidée");
}

$.index.open();//creation de la vue index