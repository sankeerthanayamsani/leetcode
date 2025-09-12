/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels = new Set(['a','e','i','o','u']);
    for (let ch of s) {
        if (vowels.has(ch)) {
            return true;  // At least one vowel → Alice can win
        }
    }
    return false; // No vowels → Alice loses
};