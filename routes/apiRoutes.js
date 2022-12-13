// dependencies 
const fs = require('fs');
const path = require('path');
const db = require("../db/db.json");

module.exports = (app) => {
  //  get request / response
  
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  // post api notes
  app.post("/api/notes", function(req, res) {
    db.push(req.body);

    // add an ID for each note
    db.forEach((item, i) => {
      item.id = i + 1;
  });

    // writeFile + JSON
    fs.writeFile("./db/db.json", JSON.stringify(db), function() {
      res.json(db);
  });
});

    //  JSON.stringify(noetsData)
    app.delete("/api/notes/:id", (req, res) => {
      let id = req.params.id;

      // Delete note
      db.splice(id - 1, 1);

      // Assign new ids to remaining notes
      db.forEach((item, i) => {
          item.id = i + 1;
      });
      // write remaining notes
      fs.writeFile("./db/db.json", JSON.stringify(db),
          res.json(notes));
  });
};