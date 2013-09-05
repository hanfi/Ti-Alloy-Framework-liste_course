if ($model){ //$model est le model qui est interprété dans cette row
	if($model.get("done")) //test si Done == true
		$.check.image = "/checkbox_checked.png";  //mettre cet image
	else
		$.check.image = "/checkbox_unchecked.png"; // ou cet image
}

function toggleDone(e){ //changer la variable done et l'enregistrer en base'
	$model.set({"done": $model.get('done') ? 0 : 1}).save();
}

function removeTask(e){ //supprimer la tache
	$model.destroy();
}
