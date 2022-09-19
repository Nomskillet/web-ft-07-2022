
/**
 ** Given an array of integers, return indices of the two numbers such that they add up to a specific target You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
Example:
Given nums = [2, 7, 11, 15]

{
    11: 11
    15:15
    2: 2
}


target = 9
Because nums[0] + nums[1] = 2 + 7 = 9

caching
target = x + y
y = target -x

9-11


 */

// const two_sum = (target, arr) => {

//     let cache = {}

//     let result = [];

//     for(let y = 0; y < arr.length; y++){


//         let match = targetSum - arr[y]

//         if(cache[match]) === match {
//             result.push(array[y], match)
//             return result
//         }

//         else{
//             cache[arr[y]] = arr[y]
//         }

    










// const f 