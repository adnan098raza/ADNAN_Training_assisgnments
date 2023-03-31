def find_median(input_list):
    """
    This function takes a list of numbers as input, sorts them in ascending order, and returns the median value.
    """
    sorted_list = sorted(input_list)
    list_length = len(sorted_list)
    middle_index = list_length // 2
    
    if list_length % 2 == 0:
        median = (sorted_list[middle_index - 1] + sorted_list[middle_index]) / 2
    else:
        median = sorted_list[middle_index]
    
    return median

# Example usage of the find_median function
input_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
median = find_median(input_list)
print("The input list is:", input_list)
print("The median value is:", median)
