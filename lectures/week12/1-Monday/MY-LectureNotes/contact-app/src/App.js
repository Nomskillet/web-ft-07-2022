import React, { useState } from "react";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { Paper, H1 } from "./components/Styles";
import { Button } from "react-bootstrap";
import initialContactData from "./data/contacts";

const App = () => {
  const [addContact, setAddContact] = useState(false);
  const [contacts, setContacts] = useState(()=>initialContactData.sort((a, b) => a.name > b.name ? 1 : -1));
  const [isEdit, setIsEdit] = useState(false);
  const [justCancelled, setJustCancelled] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [showFavorites, setShowFavorites] = useState(false)

  console.log(contacts);

  const handleAddContact = (newContact) => {
    //prevents mutation of old state by spreading the old state and adding
    // the newProject object to the end of the new array
    let newlist = [newContact, ...contacts];
    newlist.sort((a, b) => a.name > b.name ? 1 : -1)
    setContacts(newlist);
    setAddContact(false);
    console.log('adding contact');
  };

  const handleDeleteContact = (id) => {
    //3  [3, 4, 5, 6, 7]

    //spread to prevent mutation of old state.
    let oldContacts = [...contacts];

    let filteredContacts = oldContacts.filter((contact) => {
      return id !== contact.id;
    });
    //state is updated with new filtered projects
    setContacts(filteredContacts);
  };

  const handleCancel = () => {
    setAddContact(false);
    
  }

  const handleEdit = (editObj) => {
    let editedContacts = [...contacts];

    console.log("ediit ID: ", editObj.id, "editedContacts:", editedContacts);
    editedContacts.forEach((contact, i) => {
      if(editObj.id === contact.id){
        editedContacts[i] = editObj;
        setContacts(editedContacts);
        
      }
      
    });

    console.log('im editing');

  }

  const handleIsEdit = (inEditMode) => {
    setIsEdit(inEditMode);
  }

  const handleJustCancelled = (cancelStatus) => {
    console.log('handle just canelled', cancelStatus);
      setJustCancelled(cancelStatus);
  }

  const handleIsFavorite = (id) => {

    contacts.forEach((contact, index)=>{
        if(contact.id === id){
          let temp = [...contacts];
          temp[index].isFavorite = !temp[index].isFavorite;
          setContacts(temp);
        }
    })

  }


  return (
    <>
      <div className="row">
        <div className="col-6 offset-3 py-5">
          <H1>Contact List</H1>
          <Paper height="auto" width="100%">
            
            {addContact ? null : (
              <div className="row">
                <div className="col-12">
                  <input value={searchVal}
                    className="form-control form-control-lg"
                    type="text" onChange={(e)=>setSearchVal(e.target.value)}
                    placeholder="search contacts"
                  />
                </div>
                
              </div>
            )}

            <div className="row mt-2">
              <div className="col-12">

                {addContact ? (
                  <Form onAdd={handleAddContact} onCancel={handleCancel} 
                  onJustCancelled={handleJustCancelled}
                  isEdit={isEdit} onEditMode={handleIsEdit} onEdit={handleEdit} 
                  hello={false} />
                ) : (
                  <>
                    <Button variant="info" className="h-100" onClick={()=>setAddContact(true)}>
                      Add New Contact
                    </Button>

                    {showFavorites 
                    ?
                    <Button variant="info" className="h-100 ml-4" onClick={()=>setShowFavorites(false)}>
                      Show All
                    </Button>
                    
                    :
                    <Button variant="warning" className="h-100 ml-4" onClick={()=>setShowFavorites(true)}>
                      Show Favorites
                    </Button>
                    }
                  </>
                )}
              </div>
            </div>
          </Paper>
        </div>
        {/* end of column */}
      </div>
      {/* end of row */}

      <div className="row">
        <div className="col-6 offset-3">
          <ContactList contacts={contacts} onDelete={handleDeleteContact} 
          onCancel={handleCancel} isEdit={isEdit} searchVal={searchVal}
          onEditMode={handleIsEdit} onEdit={handleEdit} onFavorite={handleIsFavorite}
          showFavorites={showFavorites}
          onJustCancelled={handleJustCancelled} justCancelled={justCancelled} />
        </div>
        {/* end of column */}
      </div>
      {/* end of row */}
    </>
  );
};

export default App;