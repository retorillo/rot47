const BEG = 0x21;
const END = 0x7e;
const LEN = END - BEG + 1;
function rot47(input) {
  var output = [];
  for (var c = 0; c < input.length; c++) {
    var cp = input.charCodeAt(c);
    if (BEG <= cp && cp <= END)
      output.push(String.fromCodePoint((cp - BEG + LEN/2) % LEN + BEG));
    else
      output.push(input[c]);
  }
  return output.join('');
}
module.exports = rot47;
