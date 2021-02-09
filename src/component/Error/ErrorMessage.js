import React from 'react';
import PropsTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                something went wrong
            </div>
            <pre>{error.toString()}</pre>
        </div>
    );
}

ErrorMessage.propTypes =  {
    error:PropsTypes.any
}

export default ErrorMessage;