function Controller() {
    function __alloyId8() {
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Alloy.createController("row", {
                $model: __alloyId5
            });
            rows.push(__alloyId6.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function doAddItem() {
        var data = {
            label: $.itemField.value,
            done: 0
        };
        var tache = Alloy.createModel("tache", data);
        tache.save();
        taches.fetch();
    }
    function doClear() {
        while (taches.length) taches.at(0).destroy();
        alert("liste des tâches vidée");
        taches.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("tache");
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
    doAddItem ? $.__views.itemField.addEventListener("return", doAddItem) : __defers["$.__views.itemField!return!doAddItem"] = true;
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
    $.__views.clear = Ti.UI.createButton({
        top: "100dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Supprimer toutes les taches",
        id: "clear"
    });
    $.__views.index.add($.__views.clear);
    doClear ? $.__views.clear.addEventListener("click", doClear) : __defers["$.__views.clear!click!doClear"] = true;
    $.__views.table = Ti.UI.createTableView({
        top: "150dp",
        id: "table"
    });
    $.__views.index.add($.__views.table);
    var __alloyId7 = Alloy.Collections["tache"] || tache;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var taches = Alloy.Collections.instance("tache");
    taches.fetch();
    $.index.open();
    __defers["$.__views.itemField!return!doAddItem"] && $.__views.itemField.addEventListener("return", doAddItem);
    __defers["$.__views.add!click!doAddItem"] && $.__views.add.addEventListener("click", doAddItem);
    __defers["$.__views.clear!click!doClear"] && $.__views.clear.addEventListener("click", doClear);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;