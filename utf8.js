define(['exports'],
function(exports) {

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

  exports.encode = encode;
  exports.decode = decode;
});
