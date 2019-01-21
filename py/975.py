
import unittest
from util_tree import *


class Solution:
    def isUnivalTree(self, root, val=-1):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        if val == -1:
            val = root.val
        if root.val != val:
            return False
        return self.isUnivalTree(root.left, val) and self.isUnivalTree(root.right, val)



class SolutionTest(unittest.TestCase):
    def test_convertBST(self):
        
        s = Solution()
        root = fromListToTree([])
        self.assertTrue(s.isUnivalTree(root))
        root = fromListToTree([1,1,1,1,1,None,1])
        self.assertTrue(s.isUnivalTree(root))
        root = fromListToTree([2,2,2,5,2])
        self.assertFalse(s.isUnivalTree(root))

if __name__ == "__main__":
    unittest.main()
