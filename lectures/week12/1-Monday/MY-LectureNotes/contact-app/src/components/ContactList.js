import React from 'react';
import ContactItem from './ContactItem';
import {ULHover} from './Styles'

const ContactList = ({contacts, onDelete, onCancel, onEditMode, 
    isEdit, onEdit, onJustCancelled, justCancelled, searchVal, onFavorite, showFavorites}) => {
  
    //console.log(onFavorite);
    const filterData = () => {
        let filteredArr = contacts.filter(contact =>{
            return contact.name.toLowerCase().includes(searchVal);
        })

        console.log('filterd array', filteredArr);
        return filteredArr.map(contact => {
            return <ContactItem key={contact.id} onDelete={onDelete} 
            onCancel={onCancel} onJustCancelled={onJustCancelled} 
            justCancelled={justCancelled} onFavorite={onFavorite}
            contact={contact} isEdit={isEdit} 
            onEditMode={onEditMode} onEdit={onEdit}/>
            })
        
    }

    const showFavoriteList = () => {
        
        let filteredArr = contacts.filter(contact => {
            return contact.isFavorite === true;
        })

        return filteredArr.map(contact => {
            return <ContactItem key={contact.id} onDelete={onDelete} 
            onCancel={onCancel} onJustCancelled={onJustCancelled} 
            justCancelled={justCancelled} onFavorite={onFavorite}
            contact={contact} isEdit={isEdit} 
            onEditMode={onEditMode} onEdit={onEdit}/>
            }) 
    }
  
  return (
    <ULHover>

        {showFavorites ?
            showFavoriteList()
        :
            searchVal === '' ? 
                contacts.map(contact =>{
                return <ContactItem key={contact.id} onDelete={onDelete} onCancel={onCancel} onJustCancelled={onJustCancelled} justCancelled={justCancelled}
                contact={contact} isEdit={isEdit} onFavorite={onFavorite}
                onEditMode={onEditMode} onEdit={onEdit}/>
                })
                :
                filterData()
        }
      
    </ULHover>
  )
}

export default ContactList