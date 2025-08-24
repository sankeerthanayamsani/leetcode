/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currcount = 0;
    let maxcount = 0;
    for(i=0;i<nums.length;i++){
        if (nums[i]==1){
            currcount++;
        }
        else{
            maxcount = Math.max(currcount,maxcount);
            currcount=0;
        }
    }
    return Math.max(currcount,maxcount);
    
    
};