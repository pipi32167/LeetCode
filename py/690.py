import unittest

class Solution:
    def getImportance(self, employees, id):
        """
        :type employees: Employee
        :type id: int
        :rtype: int
        """
        d = {}
        for e in employees:
            d[e.id] = e
        
        e = d[id]
        
        r = 0
        subordinates = [id]
        while len(subordinates) > 0:
            id = subordinates.pop()
            r += d[id].importance
            subordinates.extend(d[id].subordinates)
        return r


# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates


class SolutionTest(unittest.TestCase):
    def test_getImportance(self):
        s = Solution()
        employees = list(map(lambda x: Employee(x[0], x[1], x[2]), [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]))
        self.assertEqual(s.getImportance(employees, 1), 11)



if __name__ == "__main__":
    unittest.main()
