import { useEffect } from 'react';
import { connect } from 'react-redux';

import ContactList from "../components/contacts/ContactList";
import { fetchAllContacts, deleteContact, changeContactState } from '../store/actions/contacts';

const ContactsContainer = ({
  contacts, error, success, loading,
  fetchAllContacts, deleteContact, changeContactState
}) => {
  useEffect(() => {
    fetchAllContacts();
  }, [fetchAllContacts]);

  useEffect(() => {
    return () => {
      changeContactState('success', null);
      changeContactState('error', null);
    }
  }, [])

  const handleContactDelete = (id) => {
    if (window.confirm('Are you sure? Do you want to delete?')) {
      deleteContact(id);
    }
  }

  return (
    <ContactList
      loading={loading}
      error={error}
      success={success}
      contacts={contacts}
      onContactDelete={handleContactDelete} />
  )
}

const mapStateToProps = (state) => {
  const { contactsReducer } = state;
  return {
    ...contactsReducer
  }
}

const mapDispatchToProps = {
  fetchAllContacts,
  deleteContact,
  changeContactState
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
