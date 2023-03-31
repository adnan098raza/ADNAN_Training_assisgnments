def sort_strings(input_list):
    """
    This function takes a list of strings as input, sorts them in alphabetical order, and returns a new list with the sorted strings.
    """
    sorted_list = sorted(input_list)
    return sorted_list

# Example usage of the sort_strings function
input_list = ["date", "banana", "cherry","apple","elderberry"]
sorted_list = sort_strings(input_list)
print("The original list is:", input_list)
print("The sorted list is:", sorted_list)

