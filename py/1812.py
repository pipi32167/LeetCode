import unittest

class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        i = ord(coordinates[0]) - ord('a')
        j = ord(coordinates[1]) - ord('1')
        return (i + j) % 2 == 1

        
class SolutionTest(unittest.TestCase):

    def test_squareIsWhite(self):
        s = Solution()
        self.assertFalse(s.squareIsWhite("a1"))
        self.assertTrue(s.squareIsWhite("h3"))
        self.assertFalse(s.squareIsWhite("c7"))
        
    
    
if __name__ == "__main__":
    unittest.main()
