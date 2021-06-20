import React from "react";
import { Link } from "react-router-dom";
import { CONTACTS_URL } from "../../constants/navigation";

import FlashMessage from "../shared/FlashMessage/FlashMessage";

const AddContact = ({
  error, isEdit,
  contact: { name, email },
  onContactChange, onContactAdd
}) => {
  const label = isEdit ? 'Edit' : 'Add';
  return (
    <div className="ui main">
      <h2>{label} Contact</h2>
      {error && <FlashMessage type='error' message={error} />}
      <form
        className="ui form"
        onSubmit={onContactAdd}
      >
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onContactChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onContactChange}
          />
        </div>
        <button type='submit' className="ui button blue">{label}</button>
        <Link to={CONTACTS_URL}><button className="ui button">Back</button></Link>
      </form>
    </div>
  );
}

export default AddContact;

/*
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;

*/
