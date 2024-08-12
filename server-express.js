// First, we have to require Express so we can use it in our app.
const express = require("express");
const morgan = require("morgan");

// I'm already creating the server:
const server = express();

// this is called middleware. It's a method that is going to run on EACH route
server.use(express.static("public"));
// This middleware logs in the console all the requests
server.use(morgan("dev"));
// and this one is going to parse the incoming requests as JSON
server.use(express.json());

server.get("/api/pokemon", (request, response) => {
  console.log("WE GOT A REQUEST IN API/POKEMON");
  // Now I'm able to send objects directly!

  // we can also send different status codes:
  response.status(403).send({
    message: "Sorry, you don't have permissions to get this data",
  });
});

server.get("/", (req, res) => {
  res.send(`
     <body>
        <h1>Hello this is an H1</h1>
        <p>This is a paragraph</p>
     </body>
    `);
});

server.get("/index", (req, res) => {
  // __dirname is a variable available in nodejs to get the exact path to our project
  console.log(__dirname);

  res.sendFile(__dirname + "/index.html");
});

server.listen(5005, () => {
  console.log("Server running 🏃‍♂️ on port: 5005");
});
