import unittest
from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def build(d):
    """
    :type d: Deque[int]
    :rtype: TreeNode
    """
    if len(d) == 0 or d[0] == None:
        return None

    root = TreeNode(d.popleft())
    nodes = deque([root])
    while len(nodes) > 0:
        node = nodes.popleft()
        if len(d) == 0:
            continue

        if d[0] != None:
            node.left = TreeNode(d.popleft())
            nodes.append(node.left)
        else: 
            d.popleft()

        if len(d) == 0:
            continue

        if d[0] != None:
            node.right = TreeNode(d.popleft())
            nodes.append(node.right)
        else: 
            d.popleft()

    return root

def dfs_mid(root, r):
    if not root:
        return
    
    dfs_mid(root.left, r)
    r.append(root.val)
    dfs_mid(root.right, r)
    
def dfs_pre(root, r):
    if not root:
        return
    
    r.append(root.val)
    dfs_pre(root.left, r)
    dfs_pre(root.right, r)
    
def dfs_pos(root, r):
    if not root:
        return
    
    dfs_pos(root.left, r)
    dfs_pos(root.right, r)
    r.append(root.val)

def level_iterate(root, nodes, depth=0):

    if depth >= len(nodes):
        nodes.append([])

    if not root:
        nodes[depth].append(None)
        return

    nodes[depth].append(root.val)
    level_iterate(root.left, nodes, depth+1)
    level_iterate(root.right, nodes, depth+1)

def level_iterate_flatten(root):
    r = []
    level_iterate(root, r)
    nodes = []
    for i in range(len(r)):
        for j in range(len(r[i])):
            nodes.append(r[i][j])
    
    while nodes[-1] == None:
        nodes.pop()
    return nodes

    
def fromListToTree(l):
    d = deque(l)
    root = build(d)
    return root

class TreeUtilTest(unittest.TestCase):
    def test_fromListToTree(self):

        expect = []
        actual = []
        dfs_pre(fromListToTree([]), actual)
        self.assertListEqual(expect, actual)

        expect = [3,5,6,2,7,4,1,0,8]
        actual = []
        dfs_pre(fromListToTree([3,5,1,6,2,0,8,None,None,7,4]), actual)
        self.assertListEqual(expect, actual)

class CharsTreeNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.children = []

    def search(self, key):

        for child in self.children:
            if key.startswith(child.key):
                r = child.search(key)
                if r:
                    return r

        return self

    def find(self, key):

        r = self.search(key)
        if r and r.key == key:
            return r
        return None

    def sum(self):
        r = self.val
        # print("sum", self.key, len(self.children))
        for child in self.children:
            # print(child.key, child.val)
            r += child.sum()
        return r

    def insert(self, key, val):
        r = self.search(key)
        if r and r.key == key:
            r.val = val
            return

        while len(r.key) < len(key):
            node = CharsTreeNode(key[:len(r.key)+1], 0)
            r.children.append(node)
            r = node

        r.val = val


if __name__ == "__main__":
    unittest.main()