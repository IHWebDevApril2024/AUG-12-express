// this is like IMPORT in ES modules
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("REQUEST URL: ", request.url);

  if (request.url === "/api/pokemon") {
    // To send an object is not possibel directly
    /*  response.write({
      name: "Bulbasur",
      attack: "Cut",
    }); */
    // But we can write a message
    response.write("You are requesting for a pokemon");
    response.end();
  } else {
    response.write("THis is the home url");
    response.end();
  }

  console.log("REQUEST METHOD: ", request.method);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
