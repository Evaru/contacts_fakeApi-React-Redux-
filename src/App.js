import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, NotFound, PublicRoute } from "./components";
import {
  contactsList,
  detailContact,
  authModule,
  editContact,
  addContact
} from "./modules";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute
              path="/"
              exact
              component={contactsList}
            />
            <PrivateRoute
              path="/contact/:id"
              exact
              component={detailContact}
            />
            <PrivateRoute
              path="/contact/:id/edit"
              exact
              component={editContact}
            />
            <Route path="/login" exact component={authModule} />
            <PrivateRoute
              path="/add"
              exact
              component={addContact}
            />
            <PrivateRoute path="*" exact component={NotFound} />
            <PublicRoute path="/login" exact component={authModule} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
