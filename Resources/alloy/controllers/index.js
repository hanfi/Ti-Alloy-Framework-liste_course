function Controller() {
    function doAddItem() {
        var data = {
            libelle: "acheter un teapot",
            done: false
        };
        var tache = Alloy.createModel("tache", data);
        tache.save();
    }
    function doShowList() {
        var taches = Alloy.createCollection("tache");
        taches.fetch();
        alert(JSON.stringify(taches));
    }
    function doClear() {
        var taches = Alloy.createCollection("tache");
        taches.fetch();
        while (taches.length) taches.at(0).destroy();
        alert("data cleared");
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
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.add = Ti.UI.createLabel({
        top: 0,
        width: Ti.UI.SIZE,
        height: 50,
        color: "#000",
        text: "add item",
        id: "add"
    });
    $.__views.index.add($.__views.add);
    doAddItem ? $.__views.add.addEventListener("click", doAddItem) : __defers["$.__views.add!click!doAddItem"] = true;
    $.__views.list = Ti.UI.createLabel({
        top: 50,
        width: Ti.UI.SIZE,
        height: 50,
        color: "#000",
        text: "show list",
        id: "list"
    });
    $.__views.index.add($.__views.list);
    doShowList ? $.__views.list.addEventListener("click", doShowList) : __defers["$.__views.list!click!doShowList"] = true;
    $.__views.clear = Ti.UI.createLabel({
        top: 100,
        width: Ti.UI.SIZE,
        height: 50,
        color: "#000",
        text: "clear DB",
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