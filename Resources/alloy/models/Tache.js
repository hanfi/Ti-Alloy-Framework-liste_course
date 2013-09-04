exports.definition = {
    config: {
        columns: {
            label: "string",
            done: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "tache"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("tache", exports.definition, []);

collection = Alloy.C("tache", exports.definition, model);

exports.Model = model;

exports.Collection = collection;