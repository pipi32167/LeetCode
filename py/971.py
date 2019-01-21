import unittest
from util_tree import *

def flipIterate(root, voyage, r, r2):

    if not root:
      return True
    
    if len(voyage) <= len(r):
        return False

    if root.val != voyage[len(r)]:
        return False

    r.append(root.val)
    if not flipIterate(root.left, voyage, r, r2) or not flipIterate(root.right, voyage, r, r2) :
      pass
    
    

class Solution:
    
    def flipMatchVoyage(self, root, voyage):
        """
        :type root: TreeNode
        :type voyage: List[int]
        :rtype: List[int]
        """
        r = []
        if not flipIterate(root, voyage, r):
            return [-1]
        return r
        

class SolutionTest(unittest.TestCase):
    def test_isCompleteTree(self):
        s = Solution()

        root = fromListToTree([1,2])
        voyaga = [2,1]
        self.assertListEqual(s.flipMatchVoyage(root, voyaga), [-1])

        root = fromListToTree([1,None,2])
        voyaga = [1,2]
        self.assertListEqual(s.flipMatchVoyage(root, voyaga), [1])

        root = fromListToTree([1,2,3])
        voyaga = [1,3,2]
        self.assertListEqual(s.flipMatchVoyage(root, voyaga), [1])

        root = fromListToTree([1,2,3])
        voyaga = [1,2,3]
        self.assertListEqual(s.flipMatchVoyage(root, voyaga), [])
        
        root = fromListToTree([1,2,3,4,5])
        voyaga = [1,3,2,None,None,5,4] 
        self.assertListEqual(s.flipMatchVoyage(root, voyaga), [1,2])


if __name__ == "__main__":
    unittest.main()
