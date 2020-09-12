import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, handleInput }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={filter} onChange={handleInput} />
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Filter;
