import unittest


def maxDepth(root, depth=0):
    if not root:
        return depth - 1

    return max(
        maxDepth(root.left, depth + 1),
        maxDepth(root.right, depth + 1)
    )


def dfs(root, r, depth=0):
    if not root:
        return

    dfs(root.left, r, depth + 1)
    r.append((depth, root.val))
    dfs(root.right, r, depth + 1)


def fill(root, maxDepth, depth=0):
    if not root:
        if maxDepth < depth:
            return

        root = TreeNode("")

    root.left = fill(root.left, maxDepth, depth+1)
    root.right = fill(root.right, maxDepth, depth+1)
    return root


class Solution:
    def printTree(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[str]]
        """
        depth = maxDepth(root)
        root = fill(root, depth)
        r = []
        dfs(root, r)
        # print("depth", depth, r)

        r2 = []
        for d in range(depth+1):
            res = []
            for e in r:
                if e[1] == '' or e[0] != d:
                    res.append('')
                else:
                    res.append(str(e[1]))
            r2.append(res)
        return r2


class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None


class SolutionTest(unittest.TestCase):
    def test_printTree(self):
        s = Solution()
        self.assertListEqual(s.printTree(None), [])
        root = TreeNode(1)
        self.assertListEqual(s.printTree(root), [["1"]])
        root = TreeNode(1)
        root.left = TreeNode(2)
        self.assertListEqual(s.printTree(root), [["", "1", ""],
                                                 ["2", "", ""]])

        root = TreeNode(1)
        root.left = TreeNode(2)
        root.right = TreeNode(3)
        root.left.right = TreeNode(4)
        self.assertListEqual(s.printTree(root), [["", "", "", "1", "", "", ""],
                                                 ["", "2", "", "", "", "3", ""],
                                                 ["", "", "4", "", "", "", ""]])

# root = fill(TreeNode(1), 2)
# r = []
# dfs(root, r)
# print(r)

# root = TreeNode(1)
# root.left = TreeNode(2)
# root = fill(root, 1)
# r = []
# dfs(root, r)
# print(r)

# root = TreeNode(1)
# root.left = TreeNode(2)
# root.right = TreeNode(3)
# root.left.right = TreeNode(4)
# root = fill(root, 2)
# r = []
# dfs(root, r)
# print(r)

if __name__ == "__main__":
    unittest.main()
