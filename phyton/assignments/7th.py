def is_prime(num):
    """
    Returns True if a number is prime, False otherwise.
    """
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def find_prime_numbers(nums):
    """
    Finds all prime numbers in a list of numbers and returns a new list with those numbers.
    """
    prime_numbers = []
    for num in nums:
        if is_prime(num):
            prime_numbers.append(num)
    return prime_numbers

# Example usage:
nums = [2, 3, 4, 5, 6, 7, 8, 9, 10]
prime_numbers = find_prime_numbers(nums)
print(prime_numbers) # Output: [2, 3, 5, 7]
