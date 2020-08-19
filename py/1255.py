class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        a = {chr(97 + i): s for i, s in enumerate(score)}
        b = [collections.Counter(w) for w in words]
        d = [*map(lambda w: sum(a[c] for c in w), words)]
        ans, n = 0, len(words)

        def f(i, r, p):
            if i == n:
                nonlocal ans
                ans = max(ans, r)
            else:
                f(i + 1, r, p)
                q = p.copy()
                q.subtract(b[i])
                if all(q[c] >= 0 for c in q):
                    f(i + 1, r + d[i], q)
        f(0, 0, collections.Counter(letters))
        return ans
