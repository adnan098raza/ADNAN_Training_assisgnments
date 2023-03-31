# takes a string and returns the number of times each letter appears in the string.
string = input("Please enter a string: ")

# create a dictionary to store the count of each letter
letter_count = {}

# iterate over each character in the string
for char in string:
    # if the character is already in the dictionary, increment the count
    if char in letter_count:
        letter_count[char] += 1
    # otherwise, add the character to the dictionary with a count of 1
    else:
        letter_count[char] = 1

# print the letter count dictionary
print(letter_count)
