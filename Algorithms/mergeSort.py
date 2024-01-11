def divide(a,low, high):
    if low >= high:
        return 
    mid = (low + high)//2
    left = a[:mid+1]
    right = a[mid+1: ]
    divide(left, 0, len(left) - 1)
    divide(right, 0 , len(right) - 1)
    Merge(a,left, right) 

def Merge(resArr,arr1, arr2):
    i =j =k = 0
    while(i < len(arr1) and j < len(arr2)):
        if (arr1[i] < arr2[j]):
            resArr[k] = arr1[i]
            i += 1
            k += 1
        else:
            resArr[k] = arr2[j]
            j += 1
            k += 1
    while(i < len(arr1)):
        resArr[k] = arr1[i]
        i += 1
        k += 1
    while(j < len(arr2)):
        resArr[k] = arr2[j]
        j += 1
        k += 1 
    # return resArr
arr = [1,2,10,20,3,4,5,6,7]
divide(arr,0,len(arr))   
print(arr)
# arr1 = [10,20]    
# arr2 = [1,2,3,4,5,6,7]

# print(Merge(arr1,arr2,[0]*(2+7),len(arr1), len(arr2)))  
