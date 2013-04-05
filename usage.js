// Step 1. Require the library

// Use the one below on your code
// var crepe = require('crepe');

var crepe = require('./crepe'); // DO NOT use this one on your code

// Step 2. Start scraping the web page
crepe.scrape({
  url: 'http://poly.edu/academics/course/CS9963',
  items: {
    name:         '#center h2',       // NOTE: use jQuery selectors
    credits:      '#center p:eq(0)',
    description:  '#center p:eq(1)'
  },
  error: function (errors) {
    for (var error in errors)
      console.error(errors[error])
  },
  success: function (data) {
    // Step 3. Start digesting the scraped HTML fragments in data
    console.log(data);
  }
});
