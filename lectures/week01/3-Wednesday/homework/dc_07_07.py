triangle_rows = int(input("amount of rows in triangle?"))
for star in range(1, triangle_rows + 1):
   
    amount_space = triangle_rows - star
    
    amount_star = 2 * star - 1
    
    print((" " * amount_space)+ ("*" * amount_star))
    
   #multiplication table 
    
    i = 1
j = 1

number = int(input("Enter a number >> "))
while i <= number:
    while j <= number:
        print(f"{i} * {j} = {i*j}")
        j += 1
    i += 1
    j = 1 
    
    
    #weeks 
    
    weeks = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10']

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

weeks_index = 0
days_index = 0

while weeks_index < len(weeks):
    print(weeks[weeks_index])
    while days_index < len(days):
        print(f"-{days[days_index]}")
        days_index += 1
    days_index=0
    weeks_index += 1
    
    
    #todo list
    
    