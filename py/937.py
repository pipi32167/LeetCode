class Solution:
    def reorderLogFiles(self, logs):
        """
        :type logs: List[str]
        :rtype: List[str]
        """
        logs1 = []
        logs2 = []
        for log in logs:
            log2 = log.split(" ")
            logid = log2[0]
            log2 = " ".join(log2[1:])
            if log2[0].isnumeric():
                logs1.append([logid, log2])
            else:
                logs2.append([logid, log2])
        logs2 = sorted(logs2, key=lambda log: log[1])
        logs2.extend(logs1)
        return list(map(lambda log: " ".join(log), logs2))

s = Solution()
print(s.reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]))
print(["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"])