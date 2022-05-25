# Lists: ordered, mutable (can be changed), allows duplicate elements

myList = ["Sky", "Star", "Sunny", "Summer", "Cloud", "Storm"]
# print(myList)

myList2 = [5, True, "Sky", "Star"]
# print(myList2)

item1 = myList2[0]      #   First index of the list
# print(item1)

item2 = myList2[-1]     #   Negative indeces start from the last descending. This gets the last item.
# print(item2)

#   To iterate a list, use a for loop:
# for x in myList2:
#      print(x)

#   Check an item in an list if it exists:
if True in myList2:
    print("yes")

#   Get length (number of items) in an list:
# print(len(myList2))

############################################################################

# PYTHON LIST INSERTING AND REMOVING

#   Push a new item into the list, pushes to the last:
myList2.append("Cloud")
# print(myList2)

#   Push a new item at a specific index:
myList2.insert(1, "Sunny")
# print(myList2)


#   Remove the last item in the list (LAST IN, FIRST OUT \\ LIFO):
myList2.pop()
#   Can also assign the pop() function to a variable
# item2 = myList.pop() 
# print(myList2)


#   Remove specific item in list:
myList2.remove(5)
# print(myList2)

#   Remove all elements in a list:
# myList.clear()

############################################################################

# USEFUL LIST FUNCTIONS
myNumbers = [1,3,2,6,7,4,5]

#   Reversing order of items in the list
myList2.reverse()
# print(myList2)

#   Assigned a sorted list to a diff list variable:
mySortedNumbers = sorted(myNumbers)
# print(mySortedNumbers)

#   Sorting a list:
myNumbers.sort()            #   Default sort of numbers is in ascending.
# print(myNumbers)

#   Slicing a list:
sliceOne = myNumbers[1:5]   #   Excludes last index!!
# sliceOne = myNumbers[1:]    #   Starts at index 1 to the end
# sliceOne = myNumbers[::2]   #   From start to end, with a step of 2
# print(sliceOne)

############################################################################

# USEFUL LIST TRICKS / MERGING

#   Puts five 0s into newList variable
newList = [0] * 5
# print(newList)

mergedList = newList + myNumbers
# print(mergedList)

#   Correct way to copying a list to a new variable list!!!!
copyList = myNumbers.copy() 

prodNumbers = [i*i for i in myNumbers]
print(prodNumbers)