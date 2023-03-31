# Prompt the user to enter a list of numbers
num_list_str = input("Enter a list of numbers, separated by spaces: ")

# Convert the user input into a list of integers
num_list = [int(num) for num in num_list_str.split()]

# Define a function to square a single number
def square_number(num):
    return num**2

# Use the map() function to apply the square_number() function to each element of the list
squared_numbers = list(map(square_number, num_list))

# Print the squared numbers
print(squared_numbers)
