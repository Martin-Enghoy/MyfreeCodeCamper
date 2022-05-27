# Tuple: ordered, immutable, allows duplicate elements
#   For objects that belong together.
#   There should be at least 2 elements, or it WON'T be recognized as a tuple.
#   Tuples have less memory usage than lists. Always use tuples if possible. 
#   Tuples also are faster to be used than lists.
#   Declared with:

# myTuple = ("Sky")                 #   type: String <---
mySingle = ("Sky",)  # Proper declaration of single element tuple
# myTuple = tuple(["Sky","Star"])   #   To convert an iterable like a list into a tuple
# myConvList = list(mySingle)       #   To convert back a tuple to a list
myTuple = ("Sky", "Star")
print(myTuple)

item1 = myTuple[0]  # First index still starts at 0
print(item1)

# myTuple[1] = "Cloud"              #   This returns an error as tuples are immutable, you can't change its elements

for x in myTuple:                   # print each item of the tuple in iteration
    print(x)


print("--------------")

############################################################################

# USEFUL TUPLE FUNCTIONS
myNewTuple = ("Sky", "Star", "Sunny", "Storm", "Cloud", "Summer", "Star")

if "Sky" in myNewTuple:
    print("Sky ohh")

#   Check the number of items in a tuple
print(len(myNewTuple))

#   Check the number of repeated items in a tuple
print(myNewTuple.count('Star'))

#   Check index of the first occurrence of the item in a tuple
print(myNewTuple.index('Star'))

#   Unpacking a tuple to separate variables
#       The number of elements put on the assignment side (left) should match the number of items in the tuple (unPack)
unPack = "Sky", "Star", "Sunny"
dog1, dog2, dog3 = unPack

unPack2 = (0, 1, 2, 3, 4, 5)
sep1, *sep2, sep3 = unPack2
print(sep2)


############################################################################

# SLICING TUPLES
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

firstSet = numbers[2:5]  # Again, doesn't include the last index
print(firstSet)
