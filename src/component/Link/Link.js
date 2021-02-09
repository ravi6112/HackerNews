import React from 'react';
import PropsTypes from 'prop-types';
import './Link.css';
import { Consumer } from '../../store/context';
import { Link as RouterLink } from "react-router-dom";
import * as API from '../../shared/http';
import { DELETE_LINK_TYPE, ERROR_TYPE } from '../../store/action_type';

const Link = (props) => {
    async function deleteLinkHandler(id, dispatch) {
        try {
            await API.deleteLink(id);
            dispatch({type : DELETE_LINK_TYPE, payload:id});
        } catch(err) {
            dispatch({type: ERROR_TYPE, payload:err});
        }
    }
    return (
        <Consumer>
            {value => {
                const { url, title, id } = props.link;
                const { dispatch } = value;
                return (
                    <div>
                        <p>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <a href={url} className="card-link" target="_blank">
                                        <span style={{ color: 'grey' }}>({url})</span>
                                    </a>{' '}
                                    |
                                    <RouterLink to ={`/links/edit/${id}`}>
                                        <i className ="fas fa-edit" style = {{ cursor:'pointer'}}>
                                        </i>
                                    </RouterLink>
                                    <i
                                        className="fas fa-trash-alt"
                                        style={{ margin: 10, cursor: 'pointer' }}
                                        onClick={() => deleteLinkHandler(id, dispatch)} 
                                    />
                                </div>
                            </div>
                        </p>
                    </div>
                )
            }}
        </Consumer>
    );
}
Link.propsTypes = {
    link: PropsTypes.shape({
        id: PropsTypes.string.isRequired,
        title: PropsTypes.string.isRequired,
        url: PropsTypes.string.isRequired
    }
    )
}
export default Link;