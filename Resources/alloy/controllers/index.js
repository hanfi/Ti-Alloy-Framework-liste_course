function Controller() {
    function doAddItem() {
        var data = {
            label: $.itemField.value,
            done: false
        };
        var tache = Alloy.createModel("tache", data);
        tache.save();
        alert($.itemField.value + " a été ajouté a la liste");
    }
    function doShowList() {
        var taches = Alloy.createCollection("tache");
        taches.fetch();
        taches.each(function(tache) {
            alert("la tache " + tache.get("label") + " est " + (tache.get("done") ? "faite" : "en cours"));
        });
    }
    function doClear() {
        var taches = Alloy.createCollection("tache");
        taches.fetch();
        while (taches.length) taches.at(0).destroy();
        alert("liste des tâches vidée");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.itemField = Ti.UI.createTextField({
        top: "0dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "itemField",
        hintText: "Ajouter un element ?"
    });
    $.__views.index.add($.__views.itemField);
    $.__views.add = Ti.UI.createButton({
        top: "50dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Ajouter Tâche",
        id: "add"
    });
    $.__views.index.add($.__views.add);
    doAddItem ? $.__views.add.addEventListener("click", doAddItem) : __defers["$.__views.add!click!doAddItem"] = true;
    $.__views.list = Ti.UI.createButton({
        top: "100dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Liste des Tâches",
        id: "list"
    });
    $.__views.index.add($.__views.list);
    doShowList ? $.__views.list.addEventListener("click", doShowList) : __defers["$.__views.list!click!doShowList"] = true;
    $.__views.clear = Ti.UI.createButton({
        top: "150dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Supprimer toutes les taches",
        id: "clear"
    });
    $.__views.index.add($.__views.clear);
    doClear ? $.__views.clear.addEventListener("click", doClear) : __defers["$.__views.clear!click!doClear"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.add!click!doAddItem"] && $.__views.add.addEventListener("click", doAddItem);
    __defers["$.__views.list!click!doShowList"] && $.__views.list.addEventListener("click", doShowList);
    __defers["$.__views.clear!click!doClear"] && $.__views.clear.addEventListener("click", doClear);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;