import React, { Component } from "react";
import { Consumer } from "./../../context";
import TextInputGroup from "./../layouts/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    id: "",
    fname: "",
    lname: "",
    email: "",
    age: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = (dispatch, e) => {
    e.preventDefault();
    const { fname, lname, email, age } = this.state;

    // Form validation check
    if (fname === "") {
      this.setState({
        errors: {
          fname: "First name is required"
        }
      });
      return;
    }

    //Last name check
    if (lname === "") {
      this.setState({
        errors: {
          lname: "Last name is required"
        }
      });
      return;
    }

    //Email check
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }

    const newContact = { id: uuid(), fName: fname, lName: lname, email, age };
    dispatch({
      type: "ADD_CONTACT",
      payload: newContact
    });

    //Reset form to blank
    this.setState({
      fname: "",
      lname: "",
      email: "",
      age: "",
      errors: {}
    });
  };

  render() {
    const { fname, lname, email, age, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="First Name"
                    name="fname"
                    type="text"
                    placeholder="input first name"
                    value={fname}
                    onChange={this.onChange}
                    error={errors.fname}
                  />
                  <TextInputGroup
                    label="Last Name"
                    name="lname"
                    type="text"
                    placeholder="input last name"
                    value={lname}
                    onChange={this.onChange}
                    error={errors.lname}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="input your email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Age"
                    name="age"
                    type="text"
                    placeholder="imput your age"
                    value={age}
                    onChange={this.onChange}
                  />
                  <input type="submit" className="btn-light btn-lg" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
