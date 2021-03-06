var taches = Alloy.Collections.instance('tache');//creation d'une Collection de tache 
taches.fetch();//synchronisation de la collection avec la base de données

//Fonction d'ajout d'un nouvel element
function doAddItem(e){
  var data = {
	"label": $.itemField.value, //libelle est recupéré depuis un TextField declaré dans index.xml
	"done": 0};
	var tache = Alloy.createModel('tache', data); //creation de l'instance du model 
	tache.save(); //persist de l'objet en base de données
	$.itemField.value = "";//reset de la valeure du champ text
	$.itemField.blur(); //de-focus du champs pour faire disparaitre le clavier des device tactiles 
	taches.fetch();//synchronisation de la collection avec la base de données pour mise à jour du tableView
}

//fonction de suppression de la liste
function doClear(e){
	var dialogs = require('alloy/dialogs'); // dependance de la lib de dialogs
	dialogs.confirm({title: "Supression de toutes les tâches",message:"êtes vous sure ?",yes:"oui",no:"non",callback:function(){
		while(taches.length) { 
    		taches.at(0).destroy();//suppression des taches une par une
    		taches.fetch();
		}	
	}});
}

$.index.open();//creation de la vue index