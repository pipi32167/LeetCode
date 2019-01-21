def dfs(root, result, d):

    if not root:
        result.append(str(None))
        return

    start = len(result)
    result.append(str(root.val))
    dfs(root.left, result, d)
    dfs(root.right, result, d)
    end = len(result) + 1
    k = ','.join(result[start:end])
    if k in d:
        d[k] += 1
    else:
        d[k] = 1

def buildTree(nodes):
    val = nodes.pop()
    if val == None:
        return None
    root = TreeNode(val)
    root.left = buildTree(nodes)
    root.right = buildTree(nodes)
    return root

def parse(s):
    nodes = list(map(lambda x: int(x) if x != 'None' else None, s.split(',')))
    nodes.reverse()
    return buildTree(nodes)


class Solution:
    def findDuplicateSubtrees(self, root):
        """
        :type root: TreeNode
        :rtype: List[TreeNode]
        """
        result=[]
        d={}
        # d2={}
        dfs(root, result, d)
        result2=[]
        for (k, v) in d.items():
            # print("k:%s, v:%s" % (k, v))
            if v > 1:
                # result2.append(d2[k])
                print("k:%s, v:%s" % (k, v))
                result2.append(parse(k))
        return result2

class TreeNode:
    def __init__(self, val):
        self.val=val
        self.left=self.right=None
