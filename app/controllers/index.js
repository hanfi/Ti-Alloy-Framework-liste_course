function doAddItem(e){
	var data = {
	"libelle": $.itemField.value,
	"done": false};
	var tache = Alloy.createModel('tache', data);
	tache.save();
	alert($.itemField.value+" has been added");
}



function doShowList(e) {
	var taches = Alloy.createCollection('tache'); 
	taches.fetch();
	taches.each(function(tache){
		alert('la tache '+tache.get('libelle')+' est '+ (tache.get('done')?'faite':'en cours'));
	});
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
