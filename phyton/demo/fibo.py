n = int(input ("How many terms ? "))  

n_1 = 0  
n_2 = 1  
count = 0  

if n <= 0:  
    print ("Enter a positive integer")  

elif n == 1:  
    print ("The Fibonacci sequence ", n, ": ")  
    print(n_1)  
  
else:  
    print ("The fibonacci sequence of the numbers is:")  
    while count < n:  
        print(n_1)  
        nth = n_1 + n_2  

        n_1 = n_2  
        n_2 = nth  
        count += 1 
