import unittest
from util_tree import *

class GraphNode:
    def __init__(self, val):
        """
        :type val: int
        """
        self.val = val
        self.distance = -1
        self.neighbors = []


class Graph:
    def __init__(self, nodes=[]):
        self.nodes = nodes


def dfs(root, parent, d):
    """
    :type root: TreeNode
    :type parent: TreeNode
    :type d: dict[int => GraphNode]
    """
    if not root:
        return
    node = d[root.val] = GraphNode(root.val)
    dfs(root.left, root, d)
    dfs(root.right, root, d)
    if parent:
        node.neighbors.append(d[parent.val])
    if root.left:
        node.neighbors.append(d[root.left.val])
    if root.right:
        node.neighbors.append(d[root.right.val])


class Solution:

    def fromTreeToGraph(self, tree):
        """
        :type tree: TreeNode
        :rtype: Graph
        """
        d = {}
        dfs(tree, None, d)
        return Graph(list(d.values()))

    def updateDistance(self, graph, val):
        """
        :type graph: Graph
        """
        for node in graph.nodes:
            if node.val == val:
                targetNode = node
        dist = targetNode.distance = 0
        l = [targetNode]
        s = set()
        while len(l) > 0:
            node = l.pop()
            if node.val in s or len(node.neighbors) == 0:
                continue
            node.distance = min(
                node.neighbors,
                key=lambda n: n.distance if n.distance != -1 else 2 ** 31
            ).distance + 1
            s.add(node.val)
            l.extend(node.neighbors)

    def distanceK(self, root, target, K):
        """
        :type root: TreeNode
        :type target: TreeNode
        :type K: int
        :rtype: List[int]
        """
        graph = self.fromTreeToGraph(root)

        self.updateDistance(graph, target.val)

        return list(
            map(
                lambda node: node.val,
                filter(
                    lambda node: node.distance == K,
                    graph.nodes
                )
            )
        )


class SolutionTest(unittest.TestCase):
    def test_distanceK(self):
        s = Solution()

        root = fromListToTree([1])
        self.assertListEqual(s.distanceK(root, TreeNode(1), 3), [])

        root = fromListToTree([3, 5, 1, 6, 2, 0, 8, None, None, 7, 4])
        self.assertListEqual(s.distanceK(root, TreeNode(5), 2), [7, 4, 1])


if __name__ == "__main__":
    unittest.main()
