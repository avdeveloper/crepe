/* ~Private Members
 * ---------------------------------- */
var self    = this,
    jsdom   = require("jsdom"),
    jQuery  = "//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js";

/* ~Public Methods
 * ---------------------------------- */

/**
 * Scrape the webpage
 * @param (String) request.url The URL pointing to the web page you want to scrape
 * @param (Object) request.items A dictionary for the HTML fragments you want to scrape in the format { nameOfItem: ".jquery-selector" }
 * @param (&Function) request.error A function to call if an error occurs
 * @param (&Function) request.success A function to call when page has been scraped
 */
exports.scrape = function (req) {
  jsdom.env(req.url, [jQuery], function (errors, window) {
    if (errors) req.error(errors);

    for (var key in req.items) {
      try {
        req.items[key] = (window.$(req.items[key]))[0].outerHTML; // get the HTML in string format
      } catch (ElementNotFoundError) {
        req.items[key] = "HTML element not found";
      }
    }
    req.success(req.items);
  });
};
