import React, { useState, useEffect, useRef } from "react";
import Form from './Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpanBadge } from "./Styles";
import { ShowHideDiv } from './Styles'

const ContactItem = ({ contact, onDelete, onCancel, isEdit, 
    onEditMode, onEdit, onJustCancelled, justCancelled, onFavorite }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);

  //console.log(onFavorite);

  useEffect(()=>{
    if(justCancelled){
        setShowDetails(false);
        onJustCancelled(false);
        onEditMode(false);
    }
    
 }, [justCancelled])

 const handleShowDetails = () => {
     if(isEdit){

     
        setShowDetails(true);
     }
     else{
        setShowDetails(!showDetails)

        //if isEdit = false and showDetails = true
     }
 }

  return (
    <>
      <li>
        <div className="row pr-3">
          <div className="col-8">
          

            <div id="showDetails" onClick={handleShowDetails}>
              {showDetails ? (
                  <>
                
                  { !isEdit ?  
                  <div>
                  <b>{contact.name}</b> <br />
                  {contact.address} <br />
                  {contact.city}, {contact.state} {contact.zip} <br />
                  {contact.number} <br />
                  {contact.email}
                  </div> : null
                  }

                { isEdit ?
                  <Form onCancel={onCancel} isEdit={isEdit} contact={contact} 
                  onEditMode={onEditMode} onEdit={onEdit}
                  onJustCancelled={onJustCancelled} justCancelled={justCancelled} />
                  : null
                }
                </>
              ) : (
                <div>
                {contact.isFavorite ? <FontAwesomeIcon icon={["fas", "star"]} color="orange"/> : null}
                  <span style={{fontSize: '1.3rem', fontStyle:'bolder', fontFamily:'Courier'}}>{contact.name}</span>  <span style={{color:'#666666', fontStyle:'italic'}}>{contact.city} {contact.state}</span>
                  
                </div>
              )}

            </div>
          </div>
          
          <div className="col-4 text-right pr-2">

          <button className="button btn" onClick={()=>onFavorite(contact.id)}>
              {contact.isFavorite ? 
                <SpanBadge>
                    <FontAwesomeIcon icon={["fas", "star"]} color="orange"/>
                </SpanBadge>
              :
                <SpanBadge>
                    <FontAwesomeIcon icon={["far", "star"]} color="orange"/>
                </SpanBadge>

              }
              </button>

            <button className="button btn" onClick={()=>onDelete(contact.id)}>
                <SpanBadge>
                    <FontAwesomeIcon icon={["fas", "trash"]} color="gray" />
                </SpanBadge>
              </button>

              <button className="button btn" onClick={()=>{onEditMode(true); setShowDetails(true)}}>
                <SpanBadge>
                    <FontAwesomeIcon icon={["fas", "pencil-alt"]} color="gray" />
                </SpanBadge>
              </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ContactItem;