triangle_rows = int(input("amount of rows in triangle?"))
for star in range(1, triangle_rows + 1):
   
    amount_space = triangle_rows - star
    
    amount_star = 2 * star - 1
    
    print((" " * amount_space)+ ("*" * amount_star))
    
    