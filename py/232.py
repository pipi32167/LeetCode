class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self._list = []

    def push(self, x):
        """
        Push element x to the back of queue.
        :type x: int
        :rtype: void
        """
        self._list.append(x)

    def pop(self):
        """
        Removes the element from in front of queue and returns that element.
        :rtype: int
        """
        if len(self._list) > 0:
            r = self._list[0]
            self._list.remove(self._list[0])
            return r

    def peek(self):
        """
        Get the front element.
        :rtype: int
        """
        return self._list[0]

    def empty(self):
        """
        Returns whether the queue is empty.
        :rtype: bool
        """
        return len(self._list) == 0
