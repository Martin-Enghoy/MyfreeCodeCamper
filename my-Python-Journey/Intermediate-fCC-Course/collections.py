# collections: Counter, namedtuple, OrderedDict, defaultdict, deque
from collections import Counter

a = "aaaaabbbbccc"

myCounter = Counter(a)
print(myCounter)
print(myCounter.items())
print(myCounter.keys())
print(myCounter.values())

print(myCounter.most_common(2))