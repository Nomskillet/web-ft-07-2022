

import pickle


try:
    with open('phonebook.pickle', 'rb') as fh:
        phonebook = pickle.load(fh)
        
except:
    phonebook = {'Nomi': 1234}
    


def lookUp():
    print("Look up an entry?   ")
    response = input()
    print(phonebook.get[response])
    # print(f'''Name: {response}Found entry for {response}: {phonebook.get[response]}''')

def setUp():
    print("Name of the person you want to add?  ")
    personName = input()
    print("What is the phone number?   ")
    personNumber = input()
    phonebook[personName] = personNumber
    print(f"Entry stored for {personName}")

def deleteEntry():
    print("Who do you want to delete?   ")
    personName = input()
    print(f'Deleted entry for {personName}')
    del phonebook[personName]

def listAll():
    for x in phonebook:
        print(f'Found entry for {x}: {phonebook[x]}')
        
    
def quit():
  with open('phonebook.pickle', 'wb') as fh:
    pickle.dump(phonebook, fh)
  print('GoodBye!')
  


while True:
    selector = """
    Electronic Phone Book
    =====================
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entries
    5. Quit
    What do you want to do (1-5)?
    """
    print(selector)
    answer = int(input())

    if answer == 1:
        lookUp()
        
    elif answer == 2:
        setUp()

    elif answer == 3:
        deleteEntry()  
        
    elif answer == 4:
        listAll()
        
    elif answer == 5:
        quit()
        break   


    
    
    
    
    
    
    
    

