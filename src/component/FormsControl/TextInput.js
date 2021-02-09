import React from 'react';
import PropsTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({label, type, name, placeholder, value, onChange, error}) => {
    return (
        <div className="form-group">
            <label htmlFor="title">{label}</label>
            <input
                type={type}
                className={classnames("form-control",{
                // if there is any value inside error then add the invalid-class
                "is-invalid": error
                })}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}
TextInput.propTypes =  {
    label:PropsTypes.string.isRequired,
    type:PropsTypes.string.isRequired,
    name:PropsTypes.string.isRequired,
    placeholder:PropsTypes.string.isRequired,
    onChange:PropsTypes.func.isRequired
}

export default TextInput;