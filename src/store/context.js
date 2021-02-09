import React, { Component } from 'react';
import * as API from '../shared/http';
import ErrorMessage from '../component/Error/ErrorMessage';
import { reducer } from './reducer';

// provider component 
// consumer
const AppContext = React.createContext();
export class AppProvider extends Component {
    state = {
        links: [],
        dispatch : action => {
            return this.setState(state => {
                return reducer(state,action);
            });
        }
    };

    componentDidMount() {
        this.getLinks();
    }

    componentDidCatch(err, errInfo) {
        console.log(err);
        console.log(errInfo);
        this.setState(() => ({
            error: err
        }))
    }
    getLinks() {
        API.fetchLinks()
            .then(response => {
                this.setState(() => ({
                    links: this.state.links.concat(response.data),
                    loading: false
                }));
            })
            .catch(err => {
                this.setState(() => ({
                    error: err
                }));
            });
    }
    render() {
        if (this.state.error) {
            return <ErrorMessage error={this.state.error} />
        }
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export const Consumer = AppContext.Consumer;
