import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./../context";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./../components/layouts/Header";
import ContactList from "./../components/contacts/ContactList";
import AddContact from "./contacts/AddContact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ParamsIdTest from "./pages/ParamsIdTest";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/contact/add" component={AddContact} />
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
