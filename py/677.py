import unittest
from pprint import pprint


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


class MapSum:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = CharsTreeNode("", 0)

    def insert(self, key, val):
        """
        :type key: str
        :type val: int
        :rtype: void
        """
        self.root.insert(key, val)

    def sum(self, prefix):
        """
        :type prefix: str
        :rtype: int
        """
        r = self.root.find(prefix)
        return r and r.sum() or 0


class SolutionTest(unittest.TestCase):
    def test(self):

        s = MapSum()
        s.insert("aa", 3)
        self.assertEqual(s.sum("a"), 3)
        s.insert("ab", 2)
        self.assertEqual(s.sum("a"), 5)

        s = MapSum()
        s.insert("apple", 3)
        self.assertEqual(s.sum("ap"), 3)
        s.insert("app", 2)
        self.assertEqual(s.sum("ap"), 5)

        s = MapSum()
        s.insert("a", 3)
        self.assertEqual(s.sum("ap"), 0)
        s.insert("b", 2)
        self.assertEqual(s.sum("a"), 3)


if __name__ == "__main__":
    unittest.main()
