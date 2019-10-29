// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function() {
    return orm.all("cats");
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals) {
    return orm.create("cats", cols, vals);
  },
  update: function(objColVals, condition) {
    return orm.update("cats", objColVals, condition);
  },
  delete: function(condition) {
    return orm.delete("cats", condition);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
