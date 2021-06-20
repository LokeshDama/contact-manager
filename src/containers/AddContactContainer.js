import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import AddContact from '../components/contacts/AddContact';
import {
  createContact, updateContact, fetchSingleContact,
  changeContactState
} from '../store/actions/contacts';

const AddContactContainer = ({
  match, createContact, updateContact, fetchSingleContact, isEdit,
  singleContact, changeContactState, error,
}) => {
  const [contact, setContact] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    return () => {
      changeContactState('error', null);
      changeContactState('singleContact', null);
    }
  }, [])

  useEffect(() => {
    if (isEdit && match.params && match.params.id) {
      fetchSingleContact(match.params.id)
    }
  }, [match])

  useEffect(() => {
    if (singleContact) {
      setContact(singleContact)
    }
  }, [singleContact])

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  const handleContactAdd = (e) => {
    e.preventDefault();
    if (contact.name === '' || contact.email === '') {
      changeContactState('error', 'Please enter name and email details.');
      return
    }
    if (isEdit) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
  }

  return (
    <AddContact
      isEdit={isEdit}
      error={error}
      contact={contact}
      onContactChange={handleContactChange}
      onContactAdd={handleContactAdd} />
  )
}

const mapStateToPros = (state) => {
  const { contactsReducer } = state;
  const { singleContact, error } = contactsReducer;
  return {
    singleContact,
    error
  }
}

const mapDispatchToProps = {
  createContact, updateContact, fetchSingleContact, changeContactState
}

export default connect(mapStateToPros, mapDispatchToProps)(AddContactContainer);
