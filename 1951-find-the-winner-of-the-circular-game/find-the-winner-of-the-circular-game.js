/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = Array.from({length: n}, (_, i) => i + 1);
    let i = 0;
    
    while(arr.length > 1){
        i = (i + k - 1) % arr.length;
        arr.splice(i, 1);
    }

    return arr[0];
};