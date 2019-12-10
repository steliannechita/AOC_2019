numbers=[]


    
def increasingDigits(x):
    arr =list(str(x))
    
    if str(x) == ''.join(sorted(arr)):
        return True
    return False

    
def hasDoubleAndNotTriple(n):
    n = str(n)
    for i in range(10):
        if str(i)*2 in n and not str(i)*3 in n:
            return True
    return False

count = 0
for i in range(147981,691424):
    if hasDoubleAndNotTriple(i) and increasingDigits(i) :
        numbers.append(i)

print(len(numbers))
