# DICTIONARY: Key-Value pairs, Unordered, Mutable
#   Declaration:
myDict = {"name": "Star", "type": "Mother", "breed": "Shih Tzu", "age": 2}
print(myDict)

#   or:
myDict2 = dict(name="Sky", type="Father", breed="Shih Tzu", age=2, food="Dog Food")
print(myDict2)

#   To Assign values from a dict
theName = myDict2["name"]
print(theName)

#   To Add a new pair in the dict:
myDict2["weight"] = 5.5
print(myDict2)

#   Overwrite an existing pair in the dict:
myDict2["weight"] = 6.5
print(myDict2)

#   To delete items in the dict:
# del myDict2["type"]
# print(myDict2)

# myDict2.pop("age")
# print(myDict2)

# myDict2.popitem()  # Pops the last inserted pair
# print(myDict2)

############################################################################

# USEFUL DICT FUNCTIONS
if "name" in myDict2:
    print("It exists.")

#   Try-except method
try:
    print(myDict2["name"])
except:
    print("Does not exist.")

#   Iterating for Keys, Values, or pairs
for key in myDict2.keys():
    print(key)

for value in myDict2.values():
    print(value)

for key, value in myDict2.items():
    print(key, value)

#   Copying entire dicts
# myNewDict = myDict2       #   Don't do this, any change on myNewDict will reflect on the original myDict2

#       Proper ones
myNewDict = myDict2.copy()
myNewDict = dict(myDict2)

#   the .update() function for merging two dicts
myDict.update(myDict2)
print(myDict)

#   Using a tuple in a dict
tupleItem = (1,2)
hybridDict = {tupleItem: 2}
