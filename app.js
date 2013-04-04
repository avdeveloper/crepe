// Step 1. Require the library
var Crepe = require('./crepe.js');

// Step 2. Specify the webpage URL and delineate the DOM elments whose text to fetch
crepe = new Crepe('http://poly.edu/academics/course/CS9963', {
  name:         '#center h2',       // NOTE: use jQuery selectors
  credits:      '#center p:eq(0)',
  description:  '#center p:eq(1)'
});

// Step 3. Start scraping the web page
crepe.scrape(function (errors, response) {
  console.log(response);
});
