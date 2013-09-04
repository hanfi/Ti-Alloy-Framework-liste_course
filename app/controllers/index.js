function doAddItem(e){
	var data = {
	"libelle": "acheter un teapot",
	"done": false};
	var tache = Alloy.createModel('tache', data);
	tache.save();
}



function doShowList(e) {
	var taches = Alloy.createCollection('tache'); 
	taches.fetch();

    alert(JSON.stringify(taches));
}


function doClear(e){
	var taches = Alloy.createCollection('tache'); 
	taches.fetch();
	while(taches.length) { 
    	taches.at(0).destroy(); 
	}	
	alert("data cleared");
}


$.index.open();
