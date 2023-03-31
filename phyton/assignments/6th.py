def find_longest_word(words):
    """
    Finds the longest word in a list of words and returns it.
    """
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

# Example usage:
words = ["apple", "banana", "cherry", "dragonfruit"]
longest_word = find_longest_word(words)
print(longest_word) # Output: "dragonfruit"
