import unittest


class StockSpanner:

    def __init__(self):
        self.prices = []
        self.spans = []

    def next(self, price):
        """
        :type price: int
        :rtype: int
        """
        span = 1
        i = len(self.prices) - 1
        while i >= 0:
            iprice = self.prices[i]
            if iprice <= price:
                span += self.spans[i]
                i -= self.spans[i] 
            else:
                break

        self.prices.append(price)
        self.spans.append(span)
        return span


class StockSpannerTest(unittest.TestCase):
    def test_minAddToMakeValid(self):
        s = StockSpanner()
        prices = [100, 80, 60, 70, 60, 75, 85]
        spans = [1, 1, 1, 2, 1, 4, 6]
        for i in range(len(prices)):
            self.assertEqual(s.next(prices[i]), spans[i])


if __name__ == "__main__":
    unittest.main()
