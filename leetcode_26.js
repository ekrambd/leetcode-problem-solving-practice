//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let unique = Array.from(new Set(nums));
    for(let i = 0; i < unique.length; i++)
    {
        nums[i] = unique[i];
    }
    return unique.length;             
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let len = removeDuplicates(nums);
let result = nums.slice(0,len);
console.log(result);