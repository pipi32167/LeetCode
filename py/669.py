# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def trimBST(self, root, L, R):
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: TreeNode
        """
        if root == None:
            return None
        if L > root.val or root.val > R:
            if root.left != None:
                root2 = root.left
                while root2.right != None:
                    root2 = root2.right
                root2.right = root.right
                root = root.left
                return self.trimBST(root, L, R)
            elif root.right != None:
                root = root.right
                return self.trimBST(root, L, R)
            else:
                return None

        root.left = self.trimBST(root.left, L, R)
        root.right = self.trimBST(root.right, L, R)
        return root
