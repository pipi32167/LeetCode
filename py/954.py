import unittest
import json


class Solution:

    def canReorderDoubled2(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        d = {}
        s = set()
        for num in A:
            d.setdefault(num, 0)
            d[num] += 1
            s.add(num)
        A = list(s)
        A.sort()
        # print("step1")
        # print(A)
        for num1 in A:
            cnt1 = d[num1]
            if cnt1 == 0:
                continue

            num2 = num1 * 2
            cnt2 = d.get(num2, 0)
            if cnt1 > cnt2:
                return False
            d[num2] -= cnt1
        # print("step3")
        return True

    def canReorderDoubled(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        neg = []
        pos = []
        zeroCount = 0
        for num in A:
            if num < 0:
                neg.append(-num)
            elif num > 0:
                pos.append(num)
            else:
                zeroCount += 1
        if zeroCount % 2 != 0:
            return False
        return self.canReorderDoubled2(neg) and self.canReorderDoubled2(pos)


def load():
  f = open("../js/954_input.json", "r")
  r = json.loads(f.readlines()[0])
  f.close()
  return r

class SolutionTest(unittest.TestCase):
    def test_canReorderDoubled(self):
        s = Solution()
        self.assertFalse(s.canReorderDoubled([3, 1, 3, 6]))
        self.assertFalse(s.canReorderDoubled([2, 1, 2, 6]))
        self.assertTrue(s.canReorderDoubled([4, -2, 2, -4]))
        self.assertFalse(s.canReorderDoubled([1, 2, 4, 16, 8, 4]))
        self.assertTrue(s.canReorderDoubled(
            list(map(lambda x: 0, range(0, 30000)))))
        
        r = load()
        self.assertFalse(s.canReorderDoubled(r["sample1"]))
        self.assertFalse(s.canReorderDoubled(r["sample2"]))



if __name__ == "__main__":
    unittest.main()
