# Iterative Programming

# 1. Multiply Vectors

# Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:

# [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

a = [2, 4, 5]
b = [2, 3, 6]

ab = [a[i] * b[i] for i in range(len(a))]

print(ab)

# print(num_list1 * num_list2)

# # 2. Matrix Addition

list1 = [2, -2]
list2 = [5, 3]
product = []

for x1, x2 in zip(list1, list2):
    product.append(x1 + x2)

# print(product)

# Given two two-dimensional lists of numbers of the size 2x2 two dimensional list is represented as an list of lists:

# [ [2, -2],
#    [5, 3] ]

# Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

# 1 3
# 2 4
# and

# 5 2
# 1 0
# results in

# 6 5
# 3 4


# 3. Matrix Addition II

x = [[1, 2, 3],
     [2, 5, 6],
     [7, 8, 9]]

y = [[3, 2, 1],
     [5, 6, 7],
     [1, 2, 3]]

result = [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]]

for i in range(len(x)):
    for j in range(len(x[0])):
        result[i][j] = x[i][j] + y[i][j]
        
for r in result:
    print(r)     
    
    
#veronica
x = [[1,5,4],[2,3,6],[4,8,9]]
y = [[2,9,3],[4,8,1],[5,7,6]]

r = []

for i in range(len(x)):
    n = []
    for j in range(len(x)):
        z = 0
        for k in range(len(x)):
            xx = x[k]
            yy = y[j]
            z += xx[j] * yy[k]
        n.append(z)
    r.append(n)

print(r)   
    
    
# Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

# 4. De-dup

# Given a list of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.

test_list = [1, 3, 5, 6, 3, 5, 6, 1]
print (test_list)
  

res = []
for i in test_list:
    if i not in res:
        res.append(i)
  
print (res)

# 5. Leetspeak

# Given a paragraph of text as a String, print the paragraph in leetspeak.

# To translate a String to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):

# Letter	Translates To
# A	4
# E	3
# G	6
# I	1
# O	0
# S	5
# T	7
# Example: If your program is given the String "I am a leet programmer", it should print "1 4m 4 l337 pr0gr4mm3r" as the leetspeak translation

word_spell = input('The word:  ').upper()

result = ''

# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7

for char in word_spell:
    result_char = char
    if result_char == 'A':
        result_char = '4'
    if result_char == 'E':
        result_char = '3'
    if result_char == 'G':
        result_char = '6'
    if result_char == 'I':
        result_char = '1'
    if result_char == 'O':
        result_char = '0'
    if result_char == 'S':
        result_char = '5'
    if result_char == 'T':
        result_char = '7'
    result = result + result_char

print(result)        

#veroinca

# word = input('The word: ').upper()

# # A => 4
# # E => 3
# # G => 6
# # I => 1
# # O => 0
# # S => 5
# # T => 7

# word = word.replace('A', '4')
# word = word.replace('E', '3')
# word = word.replace('G', '6')
# word = word.replace('I', '1')
# word = word.replace('O', '0')
# word = word.replace('S', '5')
# word = word.replace('T', '7')

# print(word)


# 6. Long-long Vowels

# Given a word as a string, print the result of extending any long vowels to the length of 5.

# Examples:

# Good => Goooood 
# Cheese => Cheeeeese 
# Man => Man 
# Spoon => Spooooon

word = 'cheese'

long_vowels = ['oo', 'ee']

result = ''
for i in range(len(word)):
    twoletters = word[i:i+2]
    if twoletters in long_vowels:
        result += word[i] * 4
    else:
        result += word[i]

print(result)
 
#Veroinca
# word = 'cheese'

# word = word.replace('ee', 'eeeee')
# word = word.replace('oo', 'ooooo')

# print(word)

# 7. Caesar Cipher

# Given a string, print the Caesar Cipher (or ROT13) of that string. What is Caesar Cipher? Learn about it here.

# Use your solution to decipher the following text: "lbh zhfg hayrnea jung lbh unir yrnearq"

# Large

# Matrix Multiplication

# Given two two-dimensional lists of numbers of the size 2x2 - calculate the result of multiplying the two matrices. Print the resulting matrix.

# How do you multiple two matrices?

secret = "Lbh zhfg hayrnea, jung lbh unir yrnearq."
# secret = "hello"
offset = 13
alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = ''

for char in secret:
    ascii_code = ord(char)
    is_uppercase = ascii_code >= 65 and ascii_code <= 90
    char = char.lower()
    if char not in alphabet:
        new_char = char
    else:
        idx = alphabet.find(char)
        new_idx = idx + offset
        if new_idx > 25:
            new_idx = new_idx - 26
        new_char = alphabet[new_idx]
        if is_uppercase:
            new_char = new_char.upper()
    result += new_char

print(result)










