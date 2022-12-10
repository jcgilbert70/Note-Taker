// dependencies 
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


    //  JSON.stringify(noetsData)


    // app delete("api/notes...")





    // fs.writeFileSync(__dirname...)

  });



// res.end();
}