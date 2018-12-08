import React, { Component } from "react";
import Proptypes from "prop-types";
import ContactItem from "./ContactItem";
import { Consumer } from "./../../context";
import axios from "axios";

class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          //const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {value.contacts.map(contact => {
                return (
                  <ContactItem
                    key={contact.id}
                    id={contact.id}
                    fname={contact.name}
                    phone={contact.phone}
                    errors={contact.errors}
                  />
                );
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactList;
