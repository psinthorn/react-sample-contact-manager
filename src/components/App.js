import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./../context";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./../components/layouts/Header";
import ContactList from "./../components/contacts/ContactList";
import AddContact from "./contacts/AddContact";
import EditContact from "./contacts/EditContact";
import ImageUpload from "./contacts/ImageUpload";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ParamsIdTest from "./pages/ParamsIdTest";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="app">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route
                  exact
                  path="/contact/imageupload"
                  component={ImageUpload}
                />
                <Route exact path="/about" component={About} />
                <Route path="/params/:id" component={ParamsIdTest} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
