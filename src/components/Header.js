import React from "react";
import { Link } from "react-router-dom";

import { HOME_URL, CONTACTS_URL } from '../constants/navigation';

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={HOME_URL}><h2>My Fav App</h2></Link>
      </div>
      <div>
        <Link to={CONTACTS_URL}>
          <button className="ui tiny primary button">
            Contacts Manager
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
