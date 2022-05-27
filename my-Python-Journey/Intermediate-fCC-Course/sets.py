# Sets: Unordered (Random), Mutable, No Duplicates
mySet = {"Sky", "Star", "Sunny", "Sky"}
print(mySet)

mySet2 = set([1, 2, 3])
print(mySet2)

randSet1 = set("Hello")
print(randSet1)

emptySet = {}  # Recognized as a dict rather than a set
print(type(emptySet))
emptySet = set()
print(type(emptySet))

#   Add into the set
emptySet.add(5)
emptySet.add(4)
emptySet.add(3)
print(emptySet)

#   Remove from the set
emptySet.remove(4)
emptySet.discard(2)
print(emptySet)
print(emptySet.pop())
emptySet.clear()
print(emptySet)

#   Iterate
for x in mySet2:
    print(x)

#   Check element
if 2 in mySet2:
    print("It exists.")


############################################################################

# USEFUL SET FUNCTIONS
odds = {1, 3, 5, 7, 9}
evens = {0, 2, 4, 6, 8}
primes = {2, 3, 5, 7}

#   Union function - combines the two sets
uni = odds.union(evens)
print(uni)

#   Intersection function - only takes the like terms
inter = odds.intersection(evens)
print(inter)
inter = odds.intersection(primes)
print(inter)


setA = {1, 2, 3, 4, 5, 6, 7, 8, 9}
setB = {1, 2, 3, 10, 11, 12}

#   Difference function - only takes the unlike terms of the initial set
diff = setA.difference(setB)
print(diff)

#   Symmetric Difference function - takes the unlike terms from both sets
symmDif = setA.symmetric_difference(setB)
print(symmDif)

#   Symmetric Difference Update function - removes from similar terms from both, keeps the difference on the initial
symmDif = setA.symmetric_difference_update(setB)
print(symmDif)

#   Difference Update function - removes from initial set the difference of initial from latter
setA.difference_update(setB)
print(setA)

#   Intersection Update function - changes initial set into only the intersection of the two sets
setA.intersection_update(setB)
print(setA)

#   Update function - will acquire unlike terms from latter set into initial set
setA.update(setB)
print(setA)
print(setB)


setC = {1, 2, 3, 4, 5, 6}
setD = {1, 2, 3}
setE = {7, 8, 9}

#   issubset function to check subset
print(setD.issubset(setC))

#   issuperset function to check superset
print(setC.issuperset(setD))

#   isdisjoint function to check no similarity
print(setD.isdisjoint(setE))

############################################################################

# Copying of sets
#   This is the wrong syntax as it points both ways.
# setD = setE
setD = set(setE)

#   frozensets are immutable
setF = frozenset([1, 2, 3, 4, 5])
print(setF)