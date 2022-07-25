#1 Return a new list with each element multiplied by 5

nums = [56, 34, 34, 1, 1, 1, 23, 12, 89, 89, 89, 70, 56] 
<<<<<<< HEAD
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
            
        
        
        
        
        
        
=======


#2 Given a list [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this {'job': 'Instructor', 'name': 'Elie'} (the order does not matter).

info = [  ("name", "Elie"), ("job", "Instructor")]
#          0                      1 
obj = {}

for el in range(len(info)): # 0, 1
    print(info[el][1])
    # obj[info[el][0]] = info[el][1]
    # print(info[el][0])
    
print(obj)
    
    
    
>>>>>>> b4e06c6bdd06d759447ad36ffba7836f0477821a
