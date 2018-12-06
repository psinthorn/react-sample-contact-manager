import React, { Component } from "react";

const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: "1",
        fName: "Sinthorn",
        lName: "P.",
        email: "sinthorn@gmail.com",
        age: "38",
        errors: {}
      },
      {
        id: "2",
        fName: "nut",
        lName: "P.",
        email: "sinthorn@gmail.com",
        age: "13",
        errors: {}
      },
      {
        id: "3",
        fName: "Phansa",
        lName: "P.",
        email: "sinthorn@gmail.com",
        age: "3",
        errors: {}
      },
      {
        id: "4",
        fName: "Poey",
        lName: "P.",
        email: "sinthorn@gmail.com",
        age: "28",
        errors: {}
      }
    ],
    dispatch: action => this.setState(state => Reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
