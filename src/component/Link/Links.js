import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import Link from './Link';
import { Consumer } from '../../store/context'


class Links extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        return (
                            <React.Fragment>
                                {
                                    !value.links.length ? (
                                        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                                    ) :
                                        (
                                            value.links.map(link => <Link key={link.id} link={link} />)
                                        )
                                }
                            </React.Fragment>
                        )
                    }
                }
            </Consumer>

        );
    }
}

export default Links;