# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


def dfs(root, result):
    if not root:
        return

    result.append(root.val)
    dfs(root.left, result)
    dfs(root.right, result)


class Solution:
    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        result = []
        dfs(root, result)
        result.sort()
        r = 100000000
        for i in range(1, len(result)):
            e = result[i] - result[i-1]
            if r > e:
                r = e
        return r
