def sum_even_numbers(numbers):
    even_sum = 0
    for number in numbers:
        if number % 2 == 0:
            even_sum += number
    return even_sum

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = sum_even_numbers(numbers)
print("The sum of all even numbers in the list is:", even_sum)
