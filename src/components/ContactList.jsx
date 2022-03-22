import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

const ContactList = ({contacts, onClick}) =>{
  
  return(
    <ul>
        {contacts ? contacts.map(contact => (
          <li 
            css={{
              marginBottom: '10px',
              width: '600px',
              position: 'relative',
            }}
            key={contact.id}
            id={contact.id} 
            onClick={onClick} 
          >{contact.name}: {contact.number}
            <button 
              css={{
                backgroundColor: '#ffffff',
                fontSize: '20px',
                borderRadius: '10px',
                position: 'absolute',
                height: '100%',
                right: '0px',
              }}
              type='button'>Delete</button>
          </li>
          )) : null
        }
    </ul>
  )
}

ContactList.propTypes ={
  filtered: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  })),
  onClick: PropTypes.func,
}

export default ContactList;