/**
 * Module definition.
 *
 * Credits:
 *
 * This code is based on code originally published to Webtoolkit.info <http://www.webtoolkit.info/>,
 * as available here:
 *   http://www.webtoolkit.info/javascript-utf8.html
 *   http://www.webtoolkit.info/djs/webtoolkit.utf8.js
 * 
 * Other implementations known derive from (or include verbatim) this lineage
 * include:
 *   https://github.com/ForbesLindesay/utf8-encode
 *   https://github.com/ForbesLindesay/utf8-decode
 */
define(['exports'],
function(exports) {

  /**
   * Creates a UTF-8 encoded string from a JavaScript string.
   *
   * @param {String} input
   * @return {String}
   * @api public
   */
  function encode(input) {
    var output = '';
    
    for (var i = 0, len = input.length; i < len; i++) {
      var c = input.charCodeAt(i);
    
      if (c < 128) {
        output += String.fromCharCode(c);
      }
      else if ((c > 127) && (c < 2048)) {
        output += String.fromCharCode((c >> 6) | 192);
        output += String.fromCharCode((c & 63) | 128);
      }
      else {
        output += String.fromCharCode((c >> 12) | 224);
        output += String.fromCharCode(((c >> 6) & 63) | 128);
        output += String.fromCharCode((c & 63) | 128);
      }
    }
    
    return output;
  }

  /**
   * Decodes a string which has been encoded using UTF-8 encoding.
   *
   * @param {String} input
   * @return {String}
   * @api public
   */
  function decode(input) {
    var output = '';
    var i = 0;
    var c, c2, c3;
    c = c2 = c3 = 0;
    
    while (i < input.length) {
      c = input.charCodeAt(i);
    
      if (c < 128) {
        output += String.fromCharCode(c);
        i++;
      }
      else if ((c > 191) && (c < 224)) {
        c2 = input.charCodeAt(i + 1);
        output += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = input.charCodeAt(i + 1);
        c3 = input.charCodeAt(i + 2);
        output += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    
    return output;
  }

  /**
   * Expose functions.
   */
  exports.encode = encode;
  exports.decode = decode;
});
