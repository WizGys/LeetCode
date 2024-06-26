/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
    if (n === 0) return 0;
    if (n <= 2) return 1;
    let dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[n];
}