const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://gagan:gagan@cluster0.jwtqx79.mongodb.net/Kanban-Mock"
);

module.exports = { connection };
