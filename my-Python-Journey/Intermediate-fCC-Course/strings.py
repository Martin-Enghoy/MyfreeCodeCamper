# Strings: Ordered, Immutable, Text representation
#   Either " " or ' '
from posixpath import split


myDog = "Star is my first Shih Tzu"
myDog2 = 'Sky'
print(myDog)
print(myDog2)

escapeThis = 'I\'m a programmer xd'
print(escapeThis)

firstLetter = myDog[0]
print(firstLetter)

#   Usual slicing
subString = myDog[:]
print(subString)

#   Concatenate Strings
name = "Sunny"
greet = "Good Morning,"
sentence = greet + " " + name
print(sentence)

#   Iterate
for x in name:
    print(x)

#   Check -- Case-sensitives
    print("Yes")
else:
    print("No")


############################################################################

# USEFUL STRING FUNCTIONS
line = "Reach for the stars!!"

#   strip function to remove whitespace in the front of strings
line = line.strip()
print(line)

#   Convert to uppercase
print(line.upper())

#   Convert to lowercase
print(line.lower())

#   Check first char / string
print(line.startswith('R'))
print(line.startswith('Reach'))

#   Check last char / string
print(line.endswith('!'))
print(line.endswith('stars!!'))

#   Find index of the first occurrence of a char / substring
print(line.find('s'))
print(line.find('for'))

#   Get number of occurrences of a char / string
print(line.count('s'))
print(line.replace('stars', 'universe'))            #   This returns a new string, can be assigned to a new str var 


############################################################################

# STRING FUNCTIONS WITH OTHER DATA SETS
cheer = "Animo, La Salle!"
splitList = cheer.split(" ")        #   Default delimiter is a space " ", which splits the string into list elements
splitList2 = cheer.split(",")
print(splitList)
print(splitList2)

#   Proper way to convert list to string
splitList2 = ''.join(cheer)         #   Concatenates the list into a string, the character inside '' <-- will determine its separation
print(splitList2)


############################################################################

# FORMATTING STRINGS
var = 'Martin'
phrase = 'My name is %s' % var
print(phrase)

number = 4
answer = '2 + 2 is %d' % number
print(answer)

pi = 3.1415926535
result = '4 decimal points of pi is %.4f' % pi
result2 = 'value of pi is {:.5f} and my number is {}'.format(pi, number)
result3 = f'value of pi is {pi}'
print(result)
print(result2)
print(result3)