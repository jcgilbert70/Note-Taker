// dependencies 
const express = require("express");

// sets port 3001 per Heroku deployment guide
const PORT = process.env.PORT || 3001;

// making "express" server in node
const app = express();

// Middleware for parsing JSON
app.use(express.json());


// submission middleware, URLencoded form data
app.use(express.urlencoded({ extended: true }));

// set static folder "public"
app.use(express.static("public"));

// Map routes
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