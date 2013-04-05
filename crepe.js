function Crepe (url, request, callback) {
  
  /* ~Private Members
   * ---------------------------------- */
  var self    = this,
      jsdom   = require("jsdom"),
      jQuery  = "//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js";
  
  /* ~Public Methods
   * ---------------------------------- */
  self.scrape = function (callback) {
    jsdom.env(url, [jQuery], function (errors, window) {
      var response = {};
      for (var key in request) {
        response[key] = window.$(request[key]); // NOTE replace the old value with scraped data
      }
      callback(errors, response);
    });
  };

}

module.exports = Crepe;
