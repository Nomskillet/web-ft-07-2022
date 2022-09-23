import React from 'react'
import {useDispatch} from 'react-redux'
import {removeContact} from '../actions/contacts'

const ContactItem = ({contactObj}) => {

    const dispatch = useDispatch()// store.dispatch(actionCreator)
  return (
    

    <li key={contactObj.id}>{contactObj.firstName} {contactObj.city}

        &nbsp;&nbsp;
        <a href="#" onClick={()=>dispatch(removeContact(contactObj.id))}>X</a>
    </li>
    
  )
}

export default ContactItem