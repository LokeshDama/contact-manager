import React from "react";
import { Link } from "react-router-dom";

import { CONTACTS_URL } from "../../constants/navigation";
import FlashMessage from "../shared/FlashMessage/FlashMessage";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, error, success, loading, onContactDelete }) => {

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        onContactDelete={onContactDelete}
      />
    );
  });

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to={`${CONTACTS_URL}/add`}>
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      {success && <FlashMessage message={success} />}
      {error && <FlashMessage type='error' message={error} />}
      {loading
        ? <strong>Loading... Please wait.</strong>
        : <div className="ui celled list">
          {contacts.length > 0 ? renderContactList : <strong>You do not have any contacts</strong>}
        </div>
      }
    </div>
  );
};

export default ContactList;
