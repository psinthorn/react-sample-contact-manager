import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  name,
  placeholder,
  type,
  onChange,
  error,
  label,
  value
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

//Props Types Check
TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired
};

//Set default for props
TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
