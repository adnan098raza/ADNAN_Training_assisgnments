

#Demo Example of file handling in Python that demonstrates how to open a file, read its contents, and write to it:

# Opening a file
file = open('adnn.txt', 'w')

# Writing to a file
with open('adnn.txt', 'w') as file:
    file.write('\nThis is a new line added to the file.')

# Reading from a file again
with open('adnn.txt', 'r') as file:
    content = file.read()
    print(content)
