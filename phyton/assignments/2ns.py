def remove_vowels(input_string):
    """
    This function takes a string as input and returns a new string with all vowels removed.
    """
    vowels = "aeiouAEIOU"
    new_string = ""
    for char in input_string:
        if char not in vowels:
            new_string += char
    return new_string

# Example usage of the remove_vowels function
input_string = "Hello, World!"
new_string = remove_vowels(input_string)
print("The original string is:", input_string)
print("The new string with vowels removed is:", new_string)