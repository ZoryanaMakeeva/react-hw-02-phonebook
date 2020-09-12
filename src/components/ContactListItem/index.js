import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const ContactListItem = ({ id, name, number, handleDelete }) => {
  const deleteItem = (e) => handleDelete(e, id);
  return (
    <li className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
