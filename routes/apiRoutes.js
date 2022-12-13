// dependencies 
const router = require("express").Router();
const fs = require("fs");
const uniqid = require("uniqid");

module.exports = (app) => {
  let notesData = require(__dirname + "/../db/db.json");

  app.get("/api/notes", (req, res) => {
    //  get request / response
    res.json(notesData);
  });

  // post api notes
  app.post("/api/notes", (req, res) => {
    
    // post route for new notes
    let newNotes = req.body;
    newNotes.id = uniqid();

    // push new notes into notes data then stringify
    notesData.push(newNotes)

    //  JSON.stringify(noetsData)
    const passData = JSON.stringify(notesData);

    fs.writeFile(__dirname + "/../db/db.json", passData, (err) => {
      if (err) throw err;
    });
    res.end();
  });



  // app delete("api/notes...")
  router.delete("/notes/:id", (req, res) => {
    const boundry = req.params.id;
    db(boundry, notes);
    res.redirect("");
  });
};

module.exports = router;