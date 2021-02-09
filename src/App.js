import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header/Header";
import AddLink from './component/Link/AddLink';
import Links from './component/Link/Links';
import { AppProvider } from "./store/context";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Link from './component/Link/Link';
import NotFound from './component/NotFound/NotFound';
import EditLink from './component/Link/EditLink';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <React.Fragment>
            <Header brand="Hackernews" />
            <Switch>
              <Route exact path="/" component={Links} />
              <Route exact path="/Links/submit" component={AddLink} />
              <Route exact path="/Links/edit/:id" component={EditLink} />
              <Route exact component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </AppProvider>
    )
  }

}
export default App;
