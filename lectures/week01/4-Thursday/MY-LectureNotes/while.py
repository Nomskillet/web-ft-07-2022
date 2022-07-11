
#1. Create a program that will print from 1-10 using a while loop.

# count = 0
# while count < 10:
#   count += 1
#   print(count)

#2. Create a program that will print from 10-1 using a while loop.


# count = 10
# while count > 0:
#     count -= 1
#     print(count)

# #3. Create a program that prompts the user to enter a word.  The program doesn't stop asking the user to enter a word until the user enters the word "stop"



answer = (input("what is the magic word>>"))
    
while answer.lower() != "stop":
    question = input("what is the magic word>>")

# question = input("enter a word >> ")



# while question.lower() != "stop" :
#     question = input("enter a word >> ")
    
    

# #4a. Create a program that has a variable named username and another variabled named password with values of your choice.

# username = "Bob"
# password = "Tom"
# attempted_username = ""
# attempted_password = ""
# attempts = 0
# #4b. Prompt the user for a username and then a password.


# while attempted_username != username or attempted_password != password
#    attempted_username = input("Enter username)")
#    attempted_password = input("Enter password)")
# if username =="Tom":
#     print("Access Granted!")
# else:
#     print("Please try again?")



username = 'DkillaK'
password = 'password123!'

login_attempt_username = ""
login_attempt_password = ""
attempts = 0

while login_attempt_username != username and login_attempt_password != password and attempts < 5: 
    login_attempt_username = input('enter a username')
    login_attempt_password = input('enter a password')
    attempts += 1
    if login_attempt_username == username and login_attempt_password == password: 
        print('welcome!')
    elif attempts == 5:
        print('too many attempts. Restart program and try again.')
    
    

#4c. If the both match continue on with the program and give a welcome message.

#4d. If not it prompts the user for the username and password until they get it correct.

#4e. (bonus) have a limited amount of attempts and if they reach the limit it tells the user and exits the program.
