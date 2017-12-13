const http = require("http");
const fs = require("fs");

const PORT = 8080;

function handleResponse(request, response) {
  // /bananas.html
  const path = request.url;
  switch (path) {
    case "/":
      // Send index.html
    case "/bananas":
      // Send bananas.htmlcase
    case "/food":
      // Send food.html
    default:
      // Send 404.html
      //
  }
}

const server = http.creatServer(handleResponse);

server.loisten(PORT, function() {
  console.log("Listening on http://localhost:${PORT}");
});


// # **Instructions**
//
// * Create a website with four routes:
//   * Home
//   * Favorite Foods
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Each route should be triggered by a different URL.
// * Each route should display an HTML page listing your favorite three things of each.
// * Be sure to use `fs` to serve your HTML files.
//
// ## Bonuses
// * Have your home page have links to all of your other pages.
// * DRY up your code by only having a single `readFile`