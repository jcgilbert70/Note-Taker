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
  app.delete("/api/notes/:id", (req, res) => {
    const notesId = req.params.id;

    let filterData = notesData.filter(function (notes) {
      return notes.id != notesId;
    });

    passData = JSON.stringify(filtered);
    notesData = filterData;


    // fs.writeFileSync(__dirname...)
    fs.writeFileSync(__dirname + "/../db/db.json", newNoteData, (err) => {
      if (err) throw err;
    });

    // end
    res.end();
  });
};