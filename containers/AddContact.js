import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

let AddContact = ({ dispatch }) => {
  let nameInput;
  let phoneInput;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!nameInput.value.trim() || !phoneInput.value.trim()) {
          return
        }
        dispatch(addContact(nameInput.value, phoneInput.value))
        nameInput.value = ''
        phoneInput.value = ''
      }}>
        <input ref={node => {
          nameInput = node
        }} 
        placeholder="Name" 
        />
        <input ref={node => {
          phoneInput = node
        }} 
        placeholder="Phone Number"
        />
        <button type="submit">
          Add Contact
        </button>
      </form>
      <br/>
    </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact
