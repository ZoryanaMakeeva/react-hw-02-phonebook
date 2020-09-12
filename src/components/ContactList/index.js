import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem";

const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
