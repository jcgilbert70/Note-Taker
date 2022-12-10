const fs = require("fs");
const uniqid = require("uniqid");

module.exports = (app) => {
  let noteData = require(__dirname + "/../db/db.json");

  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });


  
}