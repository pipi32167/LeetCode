import unittest
from util_leetcode import *

class GraphNode:
    def __init__(self, idx, edges):
        self.idx = idx
        self.edges = {}
        for edge in edges:
            if edge[0] == idx:
                self.edges[edge[1]] = edge[2]


class Graph:
    def __init__(self, n, edges):
        self.nodes = []
        for i in range(n):
            self.nodes.append(GraphNode(i, edges))


class Solution:
    def findCheapestPrice2(self, graph, src, dst, stop, price, K, r):
        if stop > K + 1 or price >= r[0]:
            return
        if src == dst:
            r[0] = min(r[0], price)
            return

        for (k, v) in graph.nodes[src].edges.items():
            self.findCheapestPrice2(graph, k, dst, stop + 1, price + v, K, r)

    def findCheapestPrice(self, n, flights, src, dst, K):
        """
        :type n: int
        :type flights: List[List[int]]
        :type src: int
        :type dst: int
        :type K: int
        :rtype: int
        """
        # profiling("step1")
        graph = Graph(n, flights)
        r = [2**32, n]
        # profiling_end("step1")
        # profiling("step2")
        self.findCheapestPrice2(graph, src, dst, 0, 0, K, r)
        # profiling_end("step2")
        return r[0] == 2 ** 32 and -1 or r[0]


class SolutionTest(unittest.TestCase):
    def test(self):

        s = Solution()

        n = 3
        edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
        src = 0
        dst = 2
        k = 1
        r = 200
        self.assertEqual(s.findCheapestPrice(n, edges, src, dst, k), r)

        n = 3
        edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
        src = 0
        dst = 2
        k = 0
        r = 500
        self.assertEqual(s.findCheapestPrice(n, edges, src, dst, k), r)

        n = 5
        edges = [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]]
        src = 2
        dst = 1
        k = 1
        r = -1
        self.assertEqual(s.findCheapestPrice(n, edges, src, dst, k), r)

        for i in range(10):
            n = 100
            edges = []
            for i in range(100):
                for j in range(100):
                    if i != j:
                        edges.append([i, j, 1])
            src = 0
            dst = 99
            k = 99
            r = 1
            self.assertEqual(s.findCheapestPrice(n, edges, src, dst, k), r)


if __name__ == "__main__":
    unittest.main()
