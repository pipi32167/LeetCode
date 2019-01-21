

import unittest


class Solution(object):
    def flatten(self, head):
        """
        :type head: Node
        :rtype: Node
        """
        oldHead = head
        tails = []
        prev = None
        while(head != None):
            if head.child != None:
                if head.next != None:
                    tails.append(head.next)
                head.next = head.child
                head.next.prev = head
                head.child = None
            prev = head
            head = head.next

        if len(tails) == 0:
            return oldHead

        mid = prev

        while len(tails) > 0:
            head = prev
            head.next = tails.pop()
            head.next.prev = head
            # print(head.val)
            while head != None:
                prev = head
                head = head.next

        self.flatten(mid)

        return oldHead


class Node(object):
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

    def __repr__(self):
        return """{ val: %d, next: %s, child: %s }""" % (self.val, self.next, self.child)


def bfs(data, result):

    if data == None:
        return

    result[data["$id"]] = {
        "val": data.get("val"),
        "prev": data.get("prev", None) and data.get("prev").get("$id", None) or None,
        "next": data.get("next", None) and data.get("next").get("$id", None) or None,
        "child": data.get("child", None) and data.get("child").get("$id", None) or None,
    }
    bfs(data["next"], result)
    bfs(data["child"], result)


def createNode(data, nodes, Id):
    if Id == None:
        return None
    node = nodes.get(Id, None)
    if node != None:
        return node
    nodeData = data.get(Id, None)
    if nodeData == None:
        return None
    node = Node(
        nodeData["val"],
        createNode(data, nodes, nodeData["prev"]),
        createNode(data, nodes, nodeData["next"]),
        createNode(data, nodes, nodeData["child"])
    )
    nodes[Id] = node
    return node


def create(data):

    result = {}
    bfs(data, result)
    nodes = {}
    # print(result)
    head = createNode(result, nodes, "1")
    # print(nodes)
    print(head)
    return head


class SolutionTest(unittest.TestCase):

    def test_flatten(self):

        data = {"$id": "1", "child": None, "next": {"$id": "2", "child": {"$id": "6", "child": None, "next": {"$id": "7", "child": None, "next": None, "prev": {"$ref": "6"}, "val": 721}, "prev": None, "val": 917}, "next": {"$id": "3", "child": {"$id": "5", "child": None, "next": None, "prev": None, "val": 1753}, "next": {"$id": "4", "child": None, "next": None, "prev": {"$ref": "3"}, "val": 4285}, "prev": {"$ref": "2"}, "val": 4724}, "prev": {"$ref": "1"}, "val": 121}, "prev": None, "val": 3470}
        head = create(data)
        s = Solution()
        actual = s.flatten(head)
        expect = create({"$id": "1", "child": None, "next": {"$id": "2", "child": None, "next": {"$id": "3", "child": None, "next": {"$id": "4", "child": None, "next": {"$id": "5", "child": None, "next": {"$id": "6", "child": None, "next": {"$id": "7", "child": None,"next": None, "prev": {"$ref": "6"}, "val": 4285}, "prev": {"$ref": "5"}, "val": 1753}, "prev": {"$ref": "4"}, "val": 4724}, "prev": {"$ref": "3"}, "val": 721}, "prev": {"$ref": "2"}, "val": 917}, "prev": {"$ref": "1"}, "val": 121}, "prev": None, "val": 3470})
        print(actual)
        print(expect)
        self.assertEqual(actual, expect)


if __name__ == "__main__":
    unittest.main()
