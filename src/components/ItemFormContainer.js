import React, { useState } from "react";
import ErrorList from "./ErrorList";
import _ from "lodash";

const ItemFormContainer = (props) => {
  const [itemObject, setItemObject] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleFieldChange = (event) => {
    setItemObject({
      ...itemObject,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const clearForm = (event) => {
    setItemObject({ name: "", description: "" });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validForSubmission()) {
      props.addItem(itemObject);
      clearForm();
    }
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["name", "description"];
    requiredFields.forEach((field) => {
      if (itemObject[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <ErrorList errors={errors} />
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleFieldChange}
            value={itemObject.name}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            onChange={handleFieldChange}
            value={itemObject.description}
          />
        </label>

        <input type="submit" value="Submit Item" />
      </form>

      <button className="button" onClick={clearForm}>
        Clear Form
      </button>
    </div>
  );
};

export default ItemFormContainer;
