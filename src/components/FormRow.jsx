import React from "react";

const FormRow = ({type, name, labelText, defaultValue}) => {
  return (
    <div>
        {/** || means if value to left not given, default is to right of || */}
      <label htmlFor={name} className="form-label">{labelText || name}</label>
      {/**htmlFor must match id for linkage */}
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        required
      />
      {/**required attribute doesn't let us submit blank*/}
    </div>
  );
};



export default FormRow;
