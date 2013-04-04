function Crepe (url, request, callback) {
  
  /* ~Private Members
   * ---------------------------------- */
  var self    = this,
      jsdom   = require("jsdom"),
      jQuery  = "//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js";
  
  /* ~Constructor
   * ---------------------------------- */
  (function init() {
    // TODO empty
  })();

  /* ~Public Methods
   * ---------------------------------- */
  self.scrape = function (callback) {
    var returnable = {};
    jsdom.env(url, [jQuery], function (errors, window) {
      for (var key in request) {
        returnable[key] = window.$(request[key]).text();
      }
      callback(errors, returnable);
    });
  };

}

module.exports = Crepe;
