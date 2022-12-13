// dependencies 
const path = require("path");

module.exports = (app) => {
  // request / response
  //  send user to HTML page
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Wildcard route to direct users to a 404 page
  app.get('*', (req, res) =>
    // bad request / response
    res.sendFile(path.join(__dirname, 'public/pages/404.html'))
  );
};