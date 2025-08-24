/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let length = s.length;
    let halflength = Math.floor(length/2);
    for(i=0;i<halflength;i++){
        let temp = s[i];
        s[i] = s[length-1-i];
        s[length-1-i] = temp;
    }
    
};