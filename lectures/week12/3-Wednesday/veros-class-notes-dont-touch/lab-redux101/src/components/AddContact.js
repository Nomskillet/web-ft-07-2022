import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {addContact} from '../actions/contacts'
import {useDispatch} from 'react-redux'

const AddContact = () => {

    const [firstName, setFirstName] = useState("")
    const [city, setCity] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault(); 

        //get uniquie id 
        // {id, firstName, city}

        dispatch(addContact(uuidv4(), firstName, city))

    }

  return (
    <>
    
    <form onSubmit={handleSubmit} >

        <input type="text" placeholder="Firt Name" value={firstName} 
        onChange={e=>setFirstName(e.target.value)} />

        <input type="text" placeholder="City" value={city} 
        onChange={e=>setCity(e.target.value)} />

        <input type="submit" />

    </form>
    </>
  )
}

export default AddContact