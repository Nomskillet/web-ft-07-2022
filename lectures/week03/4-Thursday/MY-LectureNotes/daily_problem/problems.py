


# 1. Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"])

# the_list = ["Elie", "Tim", "Matt"]
# first_letter = []
# for x in the_list:
#     first_letter = [x][0]
#     print(first_letter)

#1. Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"])

list = ["Elie", "Tim", "Matt"]
n_list = []
for i in list:
    n_list.append(i[0])
    
print(n_list)

#2. Print out the numbers 1-10 from the list below
nums = [
    {"num": 1},
    {"num": 2},
    {"num": 3},
    {"num": 4},
    {"num": 5},
    {"num": 6},
    {"num": 7},
    {"num": 8},
    {"num": 9},
    {"num": 10},
]

for i in nums:
        print(i["num"])

# for i in nums:
#     print(i )

#3. Given two lists ["CA", "NJ", "RI"] and ["California", "New Jersey", "Rhode Island"] return a dictionary that looks like this {'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}

abbreviations = ["CA", "NJ", "RI"] 
state_names = ["California", "New Jersey", "Rhode Island"]

# dict_from_list = dict(zip(abbreviations, state_names))
# print(dict_from_list)



#4. see colorsProblems.py