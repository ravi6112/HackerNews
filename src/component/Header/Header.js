import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" href="/">{props.brand}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">New</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Top</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/links/submit">submit</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}
Header.propsTypes = {
    brand: PropsTypes.string.isRequired
}
export default Header;