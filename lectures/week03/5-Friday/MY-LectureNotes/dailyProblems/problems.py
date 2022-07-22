# Return a new list with each element multiplied by 5

nums = [56, 34, 34, 1, 1, 1, 23, 12, 89, 89, 89, 70, 56] 
new_list = []
for i in nums:
    new_list.append(i *5)
print(new_list)


# Given a list [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this {'job': 'Instructor', 'name': 'Elie'} (the order does not matter).

names = [("name", "elie"), ("job", "instructor")]
obj = {}
for el in range(len(names)):
    obj[names[el][0]] = names[el][1]       
    print(names[el][0])
    print(obj)
            
        
        
        
        
        
        
