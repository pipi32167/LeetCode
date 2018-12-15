# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        return root.val + self.sum(root.left) + self.sum(root.right)

    def findTilt(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
            return 0

        left = self.sum(root.left)
        right = self.sum(root.right)
        return abs(left - right) + self.findTilt(root.left) + self.findTilt(root.right)
