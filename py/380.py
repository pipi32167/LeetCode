import random


class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self._set = set()
        self._buckets = []
        for i in range(100):
            self._buckets.append([])

    def insert(self, val):
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        :type val: int
        :rtype: bool
        """
        if val in self._set:
            return False

        self._set.add(val)
        self._buckets[abs(val) % 100].append(val)
        return True

    def remove(self, val):
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        :type val: int
        :rtype: bool
        """
        if val not in self._set:
            return False

        self._set.discard(val)
        b = self._buckets[abs(val) % 100]
        b.remove(val)
        return True

    def getRandom(self):
        """
        Get a random element from the set.
        :rtype: int
        """
        rand = int(random.random() * len(self._set))
        for bucket in self._buckets:
            if rand >= len(bucket):
                rand -= len(bucket)
            else:
                return bucket[rand]
