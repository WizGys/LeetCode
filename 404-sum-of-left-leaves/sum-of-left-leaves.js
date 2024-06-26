function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sumOfLeftLeaves = function(root, isLeft = false) {
    if (!root) return 0;
    if (!root.left && !root.right) return isLeft ? root.val : 0;
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};