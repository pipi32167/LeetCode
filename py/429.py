
class Node(object):
    def __init__(self, val, children):
        self.val = val
        self.children = children

    def __repr__(self):
        return "<Node val: %s, children: %s>" % (self.val, self.children)


class Solution(object):
    def __init__(self):
        self.result = []

    def levelOrder(self, root, depth=0):
        if not root:
            return self.result

        if len(self.result) == depth:
            self.result.append([])

        self.result[depth].append(root.val)

        for item in root.children:
            self.levelOrder(item, depth + 1)

        return self.result


if __name__ == "__main__":
    s = Solution()

    l = []
    root = Node(0, [])
    # root.children
    print s.levelOrder(Node(0, []))
