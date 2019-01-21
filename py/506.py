import unittest


class Solution:
    def findRelativeRanks(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        atheles = map(lambda score: {"score": score}, nums)
        atheles = sorted(atheles, key=lambda a: - a["score"])
        top3Ranks = ["Gold Medal", "Silver Medal", "Bronze Medal"]
        ranks = {}
        for i in range(len(atheles)):
            if i < 3:
                rank = top3Ranks[i]
            else:
                rank = str(i+1)
            ranks[atheles[i]["score"]] = rank

        return list(map(lambda score: ranks[score], nums))


class SolutionTest(unittest.TestCase):
    def test_findRelativeRanks(self):
        s = Solution()
        self.assertListEqual(s.findRelativeRanks([5, 4, 3, 2, 1]), [
                             "Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"])


if __name__ == "__main__":
    unittest.main()
