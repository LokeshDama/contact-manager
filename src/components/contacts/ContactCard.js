import React from "react";
import { Link } from "react-router-dom";
import { CONTACTS_URL } from "../../constants/navigation";

import user from "../../images/user.png";

const ContactCard = ({ contact, onContactDelete }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `${CONTACTS_URL}/${id}`, state: { contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => onContactDelete(id)}
      ></i>
      <Link to={`${CONTACTS_URL}/edit/${id}`}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
