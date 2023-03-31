# get input from user and convert to list of integers
numbers = list(map(int, input("Enter a list of numbers with space: ").split()))

# define lambda function to double odd numbers
double_odd = lambda x: x*2 if x%2 != 0 else None

# use list comprehension to filter out even numbers and double odd numbers
doubled_odds = [double_odd(x) for x in numbers if x%2 != 0]

# print the resulting list
print(doubled_odds)
