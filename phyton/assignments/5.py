def find_common_elements(list1, list2):
    """
    Finds common elements in two lists and returns a new list with those elements.
    """
    common_elements = []
    for num in list1:
        if num in list2 and num not in common_elements:
            common_elements.append(num)
    return common_elements

# Accept two arrays from the user
list1 = input("Enter elements of array 1 separated by space: ").split()
list2 = input("Enter elements of array 2 separated by space: ").split()

# Convert the elements to integers if needed
list1 = [int(x) for x in list1]
list2 = [int(x) for x in list2]


common_elements = find_common_elements(list1, list2)
print(common_elements) # Output: [3, 4, 5]
