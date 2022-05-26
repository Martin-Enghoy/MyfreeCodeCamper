# Tuple: ordered, immutable, allows duplicate elements
#   For objects that belong together.
#   There should be at least 2 elements, or it WON'T be recognized as a tuple.
#   Declared with: 

# myTuple = ("Sky")                 #   type: String <---
mySingle = ("Sky",)                 #   Proper declaration of single element tuple
# myTuple = tuple(["Sky","Star"])   #   To convert an iterable like a list into a tuple
myTuple = ("Sky", "Star")
print(myTuple)

item1 = myTuple[0]                  #   First index still starts at 0
print(item1)

# myTuple[1] = "Cloud"              #   This returns an error as tuples are immutable, you can't change its elements

for x in myTuple:                   # print each item of the tuple in iteration
    print(x)


print("--------------")

############################################################################

# USEFUL TUPLE FUNCTIONS
myNewTuple = ("Sky", "Star", "Sunny", "Storm", "Cloud", "Summer")

if "Sky" in myNewTuple:
    print("Sky ohh")