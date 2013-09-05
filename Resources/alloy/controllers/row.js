function Controller() {
    function toggleDone() {
        $model.set({
            done: $model.get("done") ? 0 : 1
        }).save();
    }
    function removeTask() {
        $model.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tacheRow = Ti.UI.createTableViewRow({
        height: 44,
        id: "tacheRow"
    });
    $.__views.tacheRow && $.addTopLevelView($.__views.tacheRow);
    $.__views.check = Ti.UI.createImageView({
        left: 5,
        height: 24,
        width: 24,
        id: "check"
    });
    $.__views.tacheRow.add($.__views.check);
    toggleDone ? $.__views.check.addEventListener("click", toggleDone) : __defers["$.__views.check!click!toggleDone"] = true;
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "undefined" != typeof $model.__transform["label"] ? $model.__transform["label"] : $model.get("label"),
        id: "__alloyId9"
    });
    $.__views.tacheRow.add($.__views.__alloyId9);
    $.__views.trash = Ti.UI.createImageView({
        right: 5,
        height: 24,
        width: 24,
        id: "trash",
        image: "/trash_recyclebin_empty_closed.png"
    });
    $.__views.tacheRow.add($.__views.trash);
    removeTask ? $.__views.trash.addEventListener("click", removeTask) : __defers["$.__views.trash!click!removeTask"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $model && ($.check.image = $model.get("done") ? "/checkbox_checked.png" : "/checkbox_unchecked.png");
    __defers["$.__views.check!click!toggleDone"] && $.__views.check.addEventListener("click", toggleDone);
    __defers["$.__views.trash!click!removeTask"] && $.__views.trash.addEventListener("click", removeTask);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;