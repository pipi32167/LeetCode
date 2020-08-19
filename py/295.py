import unittest


def funcname(parameter_list):
    pass

class Heap:
    def __init__(self, heap=None, cmpFn=lambda a, b: a-b):
        self.__cmpFn = cmpFn
        self.__heap = heap or [0]

    def __len__(self):
        return len(self.__heap) - 1

    def insert(self, num):
        self.__heap.append(num)
        self.siftup()

    def search(self, val, i=1):
        heap = self.__heap
        if i >= len(heap):
            return -1

        r = self.__cmpFn(heap[i], val)
        if r > 0:
            return -1
        elif r == 0:
            return i
        else:
            i2 = self.search(val, i*2)
            if i2 != -1:
                return i2
            i2 = self.search(val, i*2 + 1)
            if i2 != -1:
                return i2
            return -1
        return -1

    def remove(self, val):
        i = self.search(val)
        if i == -1:
            return False
        add = -1 if self.peek() < self.__heap[-1] else 1
        self.__heap[i] = self.peek() + add
        self.siftup(i)
        self.deque()
        return True

    def siftup(self, i=None):
        heap = self.__heap
        i = i or len(heap) - 1
        while i != 1:
            p = int(i / 2)
            if self.__cmpFn(heap[p], heap[i]) < 0:
                break
            [heap[p], heap[i]] = [heap[i], heap[p]]
            i = p

    def siftdown(self, i=1):
        heap = self.__heap
        while True:
            c = i * 2
            if c >= len(heap):
                break
            if c + 1 < len(heap):
                if self.__cmpFn(heap[c + 1], heap[c]) < 0:
                    c += 1
            if self.__cmpFn(heap[i], heap[c]) < 0:
                break
            [heap[c], heap[i]] = [heap[i], heap[c]]
            i = c

    def peek(self):
        return self.__heap[1]

    def deque(self):
        heap = self.__heap
        if len(heap) < 2:
            return None
        elif len(heap) == 2:
            return heap.pop()
        else:
            r = heap[1]
            heap[1] = heap.pop()
            self.siftdown()
            return r

    def clone(self):
        return Heap(list(self.__heap), self.__cmpFn)

    def sort(self):

        r = []
        tmp = self.clone()
        while len(tmp.__heap) > 1:
            r.append(tmp.deque())
        return r


class MedianFinder:
    def __init__(self):
        self.__minHeap = Heap()
        self.__maxHeap = Heap(cmpFn=lambda a, b: b-a)

    def __len__(self):
        return len(self.__minHeap) + len(self.__maxHeap)

    def addNum(self, val):
        self.__minHeap.insert(val)
        self.__maxHeap.insert(self.__minHeap.deque())
        self.adjust()

    def adjust(self):
        if len(self.__maxHeap) < len(self.__minHeap):
            self.__maxHeap.insert(self.__minHeap.deque())
        elif len(self.__maxHeap) > len(self.__minHeap) + 1:
            self.__minHeap.insert(self.__maxHeap.deque())

    def remove(self, val):
        if self.__minHeap.remove(val) or self.__maxHeap.remove(val):
            self.adjust()
            return True
        return False

    def findMedian(self):
        if len(self.__minHeap) == len(self.__maxHeap):
            return (self.__minHeap.peek() + self.__maxHeap.peek()) / 2
        else:
            return self.__maxHeap.peek()

class HeapTest(unittest.TestCase):
    def test_min_heap(self):

        heap = Heap()

        heap.insert(1)
        self.assertEqual(heap.peek(), 1)
        self.assertEqual(len(heap), 1)
        self.assertListEqual(heap.sort(), [1])
        heap.insert(3)
        # print(vars(heap));
        self.assertEqual(heap.peek(), 1)
        self.assertEqual(len(heap), 2)
        self.assertListEqual(heap.sort(), [1, 3])
        heap.insert(2)
        self.assertEqual(heap.peek(), 1)
        self.assertEqual(len(heap), 3)
        self.assertListEqual(heap.sort(), [1, 2, 3])
        heap.insert(0)
        self.assertEqual(heap.peek(), 0)
        self.assertEqual(len(heap), 4)
        self.assertListEqual(heap.sort(), [0, 1, 2, 3])
        heap.insert(5)
        self.assertEqual(heap.peek(), 0)
        self.assertEqual(len(heap), 5)
        self.assertListEqual(heap.sort(), [0, 1, 2, 3, 5])
        heap.insert(0)
        self.assertEqual(heap.peek(), 0)
        self.assertEqual(len(heap), 6)
        self.assertListEqual(heap.sort(), [0, 0, 1, 2, 3, 5])
        self.assertEqual(heap.deque(), 0)
        self.assertEqual(heap.peek(), 0)
        self.assertEqual(len(heap), 5)
        self.assertListEqual(heap.sort(), [0, 1, 2, 3, 5])
        self.assertEqual(heap.deque(), 0)
        self.assertEqual(heap.peek(), 1)
        self.assertEqual(len(heap), 4)
        self.assertListEqual(heap.sort(), [1, 2, 3, 5])
        self.assertNotEqual(heap.search(1), -1)
        self.assertEqual(heap.search(0), -1)

        self.assertTrue(heap.remove(3))
        self.assertEqual(len(heap), 3)
        self.assertListEqual(heap.sort(), [1, 2, 5])
        self.assertTrue(heap.remove(5))
        self.assertEqual(len(heap), 2)
        self.assertListEqual(heap.sort(), [1, 2])
        self.assertTrue(heap.remove(1))
        self.assertEqual(len(heap), 1)
        self.assertListEqual(heap.sort(), [2])
        self.assertTrue(heap.remove(2))
        self.assertEqual(len(heap), 0)
        self.assertListEqual(heap.sort(), [])
        self.assertFalse(heap.remove(2))
        self.assertEqual(len(heap), 0)
        self.assertListEqual(heap.sort(), [])

    def test_max_heap(self):

        heap = Heap(cmpFn=lambda a, b: b-a)

        heap.insert(1)
        self.assertEqual(heap.peek(), 1)
        self.assertEqual(len(heap), 1)
        self.assertListEqual(heap.sort(), [1])
        heap.insert(3)
        self.assertEqual(heap.peek(), 3)
        self.assertEqual(len(heap), 2)
        self.assertListEqual(heap.sort(), [3, 1])
        heap.insert(2)
        self.assertEqual(heap.peek(), 3)
        self.assertEqual(len(heap), 3)
        self.assertListEqual(heap.sort(), [3, 2, 1])
        heap.insert(0)
        self.assertEqual(heap.peek(), 3)
        self.assertEqual(len(heap), 4)
        self.assertListEqual(heap.sort(), [3, 2, 1, 0])
        heap.insert(5)
        self.assertEqual(heap.peek(), 5)
        self.assertEqual(len(heap), 5)
        self.assertListEqual(heap.sort(), [5, 3, 2, 1, 0])
        heap.insert(0)
        self.assertEqual(heap.peek(), 5)
        self.assertEqual(len(heap), 6)
        self.assertListEqual(heap.sort(), [5, 3, 2, 1, 0, 0])
        self.assertEqual(heap.deque(), 5)
        self.assertEqual(heap.peek(), 3)
        self.assertEqual(len(heap), 5)
        self.assertListEqual(heap.sort(), [3, 2, 1, 0, 0])
        self.assertEqual(heap.deque(), 3)
        self.assertEqual(heap.peek(), 2)
        self.assertEqual(len(heap), 4)
        self.assertListEqual(heap.sort(), [2, 1, 0, 0])
        self.assertNotEqual(heap.search(1), -1)
        self.assertEqual(heap.search(5), -1)

        self.assertTrue(heap.remove(1))
        self.assertEqual(len(heap), 3)
        self.assertListEqual(heap.sort(), [2, 0, 0])
        self.assertTrue(heap.remove(0))
        self.assertEqual(len(heap), 2)
        self.assertListEqual(heap.sort(), [2, 0])
        self.assertTrue(heap.remove(0))
        self.assertEqual(len(heap), 1)
        self.assertListEqual(heap.sort(), [2])
        self.assertTrue(heap.remove(2))
        self.assertEqual(len(heap), 0)
        self.assertListEqual(heap.sort(), [])
        self.assertFalse(heap.remove(2))
        self.assertEqual(len(heap), 0)
        self.assertListEqual(heap.sort(), [])

    def test_median_finder(self):

        finder = MedianFinder()
        finder.addNum(1)
        self.assertEqual(finder.findMedian(), 1)
        finder.addNum(2)
        self.assertEqual(finder.findMedian(), 1.5)
        finder.addNum(3)
        self.assertEqual(finder.findMedian(), 2)
        finder.addNum(1)
        self.assertEqual(finder.findMedian(), 1.5)
        finder.addNum(1)
        self.assertEqual(finder.findMedian(), 1)
        finder.addNum(4)
        self.assertEqual(finder.findMedian(), 1.5)
        finder.addNum(5)
        self.assertEqual(finder.findMedian(), 2)

        self.assertTrue(finder.remove(1))
        # 1 1 2 3 4 5
        self.assertEqual(finder.findMedian(), 2.5)
        self.assertTrue(finder.remove(2))
        # 1 1 3 4 5
        self.assertEqual(finder.findMedian(), 3)
        self.assertTrue(finder.remove(5))
        # 1 1 3 4
        self.assertEqual(finder.findMedian(), 2)
        self.assertTrue(finder.remove(1))
        # 1 3 4
        self.assertEqual(finder.findMedian(), 3)
        self.assertTrue(finder.remove(1))
        # 3 4
        self.assertEqual(finder.findMedian(), 3.5)
        self.assertFalse(finder.remove(1))
        # 3 4
        self.assertEqual(finder.findMedian(), 3.5)
        self.assertTrue(finder.remove(3))
        # 4
        self.assertEqual(finder.findMedian(), 4)

        finder2 = MedianFinder()
        nums = list(range(20000))
        for i in range(len(nums)):
            finder2.addNum(nums[i])
            mIdx = int(len(finder2) / 2)
            if (len(finder2) % 2 == 0):
                self.assertEqual(finder2.findMedian(),
                                 (nums[mIdx - 1] + nums[mIdx]) / 2)
            else:
                self.assertEqual(finder2.findMedian(), nums[mIdx])


if __name__ == "__main__":
    unittest.main()
