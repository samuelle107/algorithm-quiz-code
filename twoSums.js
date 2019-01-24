// Lambda/Arrow function
// Worst case: O(n)
const sums = (arr, target) => {
    // Create an array that holds all values that have been checked.
    const checkedSum = [];
    // Array that contains sums that add up to the target
    const sums = [];

    for ( let i = 0; i < arr.length; i++ ) {
        // Literally the target - the value of the current array index
        const sumMinusValue = target - arr[i];

        // Check to see if sumMinusValue exists in the array of checkedSums
        // If it exists in the array, that means that the sum has been found.
        if (checkedSum[sumMinusValue] !== undefined) {
            // If it is, then push the value of the current index and the sumMinusElement into the array of sums that add to the target
            sums.push([sumMinusValue, arr[i]]);
        }
        // In the checkedSum array, make the key and value be the current array value
        checkedSum[arr[i]] = arr[i];
    }
    return sums;
};

// START HERE
const arr = [4,2,5,1,3,7,-1];
// PASS THE ARRAY AND THE TARGET VALUE TO THE FUNCTION
console.log(sums(arr, 6));
