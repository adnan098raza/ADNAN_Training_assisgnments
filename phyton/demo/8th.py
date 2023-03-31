
names = input("Enter a list of names separated by commas: ")
name_list = names.split(",")
name_list.sort()

print("Names in alphabetical order:")
for name in name_list:
    print(name) 
