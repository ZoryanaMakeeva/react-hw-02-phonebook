import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";

import styles from "./styles.module.css";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleSubmit = (e, name, number) => {
    e.preventDefault();
    const { contacts } = this.state;
    const contactsIncludeName =
      contacts.filter((contact) => contact.name === name).length > 0;
    if (contactsIncludeName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (name || number) {
      this.setState({
        contacts: [
          ...contacts,
          {
            id: uuidv4(),
            name: name ? name : "New Contact",
            number: number ? number : "No number",
          },
        ],
      });
    }
  };

  handleDelete = (e, id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
    return (
      <div className={styles.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleInput={this.handleFilter} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
