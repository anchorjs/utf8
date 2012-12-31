define(['utf8'],
function(utf8) {

  // The following character maps and conversion utilities are useful when
  // verifying the correctess of character encodings.
  //
  // http://dev.networkerror.org/utf8/
  // http://www.packetizer.com/labs/cs/characters.html
  
  describe("utf8", function() {

    it('should export encode', function() {
      expect(utf8.encode).to.exist;
      expect(utf8.encode).to.be.a('function');
    });

    it('should export decode', function() {
      expect(utf8.decode).to.exist;
      expect(utf8.decode).to.be.a('function');
    });

  });

  describe("input 'JavaScript'", function() {
    it('should encode', function() {
      var enc = utf8.encode('JavaScript');
      expect(enc).to.equal('JavaScript');
      expect(enc.length).to.equal(10);
    });
    it('should decode', function() {
      var dec = utf8.decode('JavaScript');
      expect(dec).to.equal('JavaScript');
      expect(dec.length).to.equal(10);
    });
  });
  
  describe("two byte character", function() {
    it('should encode', function() {
      var enc = utf8.encode("¢");
      expect(enc).to.equal('\xC2\xA2');
      expect(enc.length).to.equal(2);
    });
    it('should decode', function() {
      var dec = utf8.decode('\xC2\xA2');
      expect(dec).to.equal('\u00a2');
      expect(dec.length).to.equal(1);
    });
  });
  
  describe("two two byte characters followed by a one byte character", function() {
    it('should encode', function() {
      var enc = utf8.encode("Да!");
      expect(enc).to.equal('\xD0\x94\xD0\xB0\x21');
      expect(enc.length).to.equal(5);
    });
    it('should decode', function() {
      var dec = utf8.decode('\xD0\x94\xD0\xB0\x21');
      expect(dec).to.equal('\u0414\u0430\u0021');
      expect(dec.length).to.equal(3);
    });
  });
  
  describe("three byte character", function() {
    it('should encode', function() {
      var enc = utf8.encode("ৄ");
      expect(enc).to.equal('\xE0\xA7\x84');
      expect(enc.length).to.equal(3);
    });
    it('should decode', function() {
      var dec = utf8.decode('\xE0\xA7\x84');
      expect(dec).to.equal('\u09c4');
      expect(dec.length).to.equal(1);
    });
  });

  return { name: "test.utf8" }
});
