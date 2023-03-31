NumList = []
Number = int(input("Total Number of Elements: "))
for i in range(1, Number + 1):
    value = int(input("Enter the Value of %d Element : " %i))
    NumList.append(value)

print("Smallest is : ", min(NumList))
print("Largest is : ", max(NumList))