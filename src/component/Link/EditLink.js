import React, { Component } from 'react';
import { Consumer } from '../../store/context';
import * as API from '../../shared/http';
import { EDIT_LINK_TYPE, ERROR_TYPE } from '../../store/action_type';
import TextInput from '../FormsControl/TextInput';

class EditLink extends Component {
    state = {
        title: '',
        url: ''
    }
    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    async componentDidMount() {
        // try {
            const { id } = this.props.match.params;
            const { data } = await API.getLinksById(id);
            console.log(data.title);
            this.setState({ title: data.title , url: data.url});
        // } catch (err) {
        //     dispatch({ type: ERROR_TYPE, payload: err });
        // }
    }
    
    onFormSubmit = async (dispatch, event) => {
        try {
            event.preventDefault();
            const { title , url } = this.state;
            const { id } = this.props.match.params;
            const newLink = { title , url, id: Date.now().toString() };
            const { data } = await API.updateLink(id, newLink);
            dispatch({ type: EDIT_LINK_TYPE, payload: data });
            this.setState({ title: '', url: ''});
            this.props.history.push('/');
        } catch (err) {
            dispatch({ type: ERROR_TYPE, payload: err });
        }
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body">
                            <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                                <TextInput
                                    label="Title"
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    placeholder="Enter Title"
                                    onChange={this.onChangeHandler}
                                />
                                <TextInput
                                    label="URL"
                                    type="text"
                                    name="url"
                                    value={this.state.url}
                                    placeholder="Enter Url"
                                    onChange={this.onChangeHandler}
                                />
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}
export default EditLink;