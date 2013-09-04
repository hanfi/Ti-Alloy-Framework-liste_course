exports.definition = {
	config: {
		columns: {
		    "label": "string",
		    "done": "boolean"
		},
		adapter: {
			type: "sql",
			collection_name: "tache"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};