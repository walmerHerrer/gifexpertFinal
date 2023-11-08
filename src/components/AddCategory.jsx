import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories( categories => [ inputValue, ...categories ]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={onSubmit}
        >
          BUSCAR
        </button>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
