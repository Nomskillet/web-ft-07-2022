import React from 'react'
import AddContact from './AddContact'
import {useSelector} from 'react-redux'
import ContactItem from './ContactItem'

const Contacts = () => {

  const contactList = useSelector(state => state.contacts) 
  
  return (
    <>
      <h1>Contacts and Redux</h1>

      <AddContact />

      <ul>
        {contactList.map(contactObj =>{
           return <ContactItem contactObj={contactObj} />
        })}
      </ul>
      
    </>
  )
}

export default Contacts
