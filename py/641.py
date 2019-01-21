import unittest
# from collections import deque

# class MyCircularDeque:

#     def __init__(self, k):
#         """
#         Initialize your data structure here. Set the size of the deque to be k.
#         :type k: int
#         """
#         self.deq = deque()
#         self.cap = k

#     def insertFront(self, value):
#         """
#         Adds an item at the front of Deque. Return true if the operation is successful.
#         :type value: int
#         :rtype: bool
#         """
#         if len(self.deq) < self.cap:
#             self.deq.appendleft(value)
#             return True
#         return False

#     def insertLast(self, value):
#         """
#         Adds an item at the rear of Deque. Return true if the operation is successful.
#         :type value: int
#         :rtype: bool
#         """
#         if len(self.deq) < self.cap:
#             self.deq.append(value)
#             return True
#         return False


#     def deleteFront(self):
#         """
#         Deletes an item from the front of Deque. Return true if the operation is successful.
#         :rtype: bool
#         """
#         if len(self.deq) > 0:
#             self.deq.popleft()
#             return True
#         return False

#     def deleteLast(self):
#         """
#         Deletes an item from the rear of Deque. Return true if the operation is successful.
#         :rtype: bool
#         """
#         if len(self.deq) > 0:
#             self.deq.pop()
#             return True
#         return False


#     def getFront(self):
#         """
#         Get the front item from the deque.
#         :rtype: int
#         """
#         return self.isEmpty() and -1 or self.deq[0]

#     def getRear(self):
#         """
#         Get the last item from the deque.
#         :rtype: int
#         """
#         return self.isEmpty() and -1 or self.deq[-1]


#     def isEmpty(self):
#         """
#         Checks whether the circular deque is empty or not.
#         :rtype: bool
#         """
#         return len(self.deq) == 0


#     def isFull(self):
#         """
#         Checks whether the circular deque is full or not.
#         :rtype: bool
#         """
#         return len(self.deq) == self.cap


class MyCircularDeque:

    def __init__(self, k):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        :type k: int
        """
        self.deq = [-1] * k
        self.cap = k
        self.frontIdx = 0
        self.length = 0

    def insertFront(self, value):
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False

        if not self.isEmpty():
            self.frontIdx -= 1
            if self.frontIdx < 0:
                self.frontIdx = self.cap - 1
        
        self.deq[self.frontIdx] = value
        self.length += 1

        return True

    def getRearIdx(self):
        rearIdx = (self.frontIdx + self.length - 1) % self.cap
        return rearIdx

    def insertLast(self, value):
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False

        self.length += 1
        self.deq[self.getRearIdx()] = value

        return True

    def deleteFront(self):
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        :rtype: bool
        """
        if not self.isEmpty():
            self.frontIdx += 1
            if self.frontIdx >= self.cap:
                self.frontIdx = 0
            self.length -= 1
            return True
        return False

    def deleteLast(self):
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        :rtype: bool
        """
        if not self.isEmpty():
            self.length -= 1
            return True
        return False

    def getFront(self):
        """
        Get the front item from the deque.
        :rtype: int
        """
        return self.isEmpty() and -1 or self.deq[self.frontIdx]

    def getRear(self):
        """
        Get the last item from the deque.
        :rtype: int
        """
        return self.isEmpty() and -1 or self.deq[self.getRearIdx()]

    def __len__(self):
        return self.length

    def isEmpty(self):
        """
        Checks whether the circular deque is empty or not.
        :rtype: bool
        """
        return len(self) == 0

    def isFull(self):
        """
        Checks whether the circular deque is full or not.
        :rtype: bool
        """
        return len(self) == self.cap

class SolutionTest(unittest.TestCase):
    def test(self):

        s = MyCircularDeque(3)
        self.assertTrue(s.insertLast(1))
        self.assertTrue(s.insertLast(2))
        self.assertTrue(s.insertFront(3))
        self.assertFalse(s.insertFront(4))
        # print(vars(s))
        self.assertEqual(s.getRear(), 2)
        self.assertTrue(s.isFull())
        self.assertTrue(s.deleteLast())
        self.assertTrue(s.insertFront(4))
        self.assertEqual(s.getFront(), 4)

if __name__ == "__main__":
    unittest.main()
