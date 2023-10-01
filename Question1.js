
function removeElement(nums, val) {
    let k = 0;
    var res = []
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[k] = nums[j];
            k++;
            res.push(nums[k])
        }
        
    }
    console.log(res)
    return (k);
    
}
console.log(removeElement([3,2,2,3], 3))