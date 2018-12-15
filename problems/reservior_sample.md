###蓄水池抽样算法

有一个大小未知的数据流，你只能用一个feed操作来获取到下一个数据，当获取不到数据的时候，返回k个随机样本。



Solution s = new Solution(2);

s.feed(1)

s.feed(2)

s.feed(3)

s.feed(4)

s.feed(5)

s.feed() //每个数据都以2/5的概率被返回

