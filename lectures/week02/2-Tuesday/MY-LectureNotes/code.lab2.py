
# import corona


# # # print(corona.data)

# corona_data = corona.data

# # print(corona_data[5]['state'])



# for i in range(len(corona_data)):
    
#     print(corona_data[i]['state'])
#     print(f" cases: {corona_data[i]['cases']}")
#     print(f" recovered: {corona_data[i]['recovered']} ")
#     print(f" active: {corona_data[i]['active']} \n ")
    
  
# most_recovered = corona_data[0]['recovered']
# least_recovered = corona_data[0]['recovered']
  
    
# for j in range(len(corona_data)):
    
#     print(corona_data[j]['recovered'])
#     if corona_data[j]['recovered'] >= most_recovered:
#             state_mr = corona_data[j]['state']
        
#     if corona_data[j]['recovered'] <= least_recovered:
#             state_lr = corona_data[j]['state']
                
#     print(state_mr)
#     print(state_lr)
    
    
# # total_recovered = 0
# # most_recovered = 0
# # least_recovered = 0
# # for idx in corona_data:
# #     total_recovered += idx['recovered']
# #     if idx['recovered'] > most_recovered:
# #         most_recovered = idx['recovered']
# #         most_recovered_state = idx['state']
# #     if idx['recovered'] < most_recovered:
# #         least_recovered = idx['recovered']
# #         least_recovered_state = idx['state']
# #     print(f"""\tState : {idx['state']}
# #         Recovered : {idx['recovered']}
# #         Active cases : {idx['active']}\n""")
# # print(f"""\n\t Total Recovered : {total_recovered}
# #     Most recovered : {most_recovered_state} : {most_recovered}
# #     Least recovered : {least_recovered_state} : {least_recovered}""")
        


# import contacts

# contact_data = contacts.data


# for i in range(len(contact_data)):
    
#     print(contact_data[i]['name'])
#     print(f" street: {contact_data[i]['address']['street']}")
#     print(f" suite: {contact_data[i]['address']['suite']} ")
#     print(f" city: {contact_data[i]['address']['city']} ")
#     print(f" zipcode: {contact_data[i]['address']['zipcode']} \n ")
#     print()
    
    


