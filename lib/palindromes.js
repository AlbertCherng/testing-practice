function isPalindrome(s) {
  var condensed = s.split(" ").join("")
  var stringReverse = condensed.split("").reverse().join("");
  return condensed == stringReverse;
}

module.exports = isPalindrome;
