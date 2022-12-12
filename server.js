// dependencies 
const express = require("express");

// port 3001 per Heroku deployment guide
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and URLencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
// bad request / response
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

// require to run app
app.listen(PORT, () => {
  console.log(`App Port: ${PORT}`);
});