import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (e) => {
    const inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    this.props.handleSubmit(e, name, number);
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            onChange={this.handleInput}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            onChange={this.handleInput}
            value={number}
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
