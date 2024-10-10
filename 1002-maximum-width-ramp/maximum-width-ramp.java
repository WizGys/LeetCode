class Solution {
    public int maxWidthRamp(int[] nums) {
        int n = nums.length;
        int maxWidth = 0;

        int[][] pairs = new int[n][2];
        for (int i = 0; i < n; i++) {
            pairs[i][0] = nums[i];
            pairs[i][1] = i;
        }

        Arrays.sort(pairs, (a, b) -> a[0] - b[0]);

        int minIndex = Integer.MAX_VALUE;

        for (int[] pair : pairs) {
            int value = pair[0];
            int index = pair[1];

            maxWidth = Math.max(maxWidth, index - minIndex);

            minIndex = Math.min(minIndex, index);
        }

        return maxWidth;
    }
}