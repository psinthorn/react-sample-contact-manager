import React, { Component } from "react";
import { Consumer } from "./../../context";
import TextInputGroup from "./../layouts/TextInputGroup";
import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    id: "",
    name: "",
    phone: "",
    email: "",
    age: "",
    errors: {},
    onChange: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, phone, email, age, errors } = this.state;

    // Form validation check
    if (name === "") {
      this.setState({
        errors: {
          name: "First name is required"
        }
      });
      return;
    }

    //Last name check
    if (phone === "") {
      this.setState({
        errors: {
          phone: "Last name is required"
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

    const newContact = {
      name: name,
      phone: phone,
      email: email,
      age: age
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    console.log(res);
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    //Reset form to blank
    this.setState({
      name: "",
      phone: "",
      email: "",
      age: "",
      errors: {}
    });
    {
      this.props.history.push("/");
    }
  };

  render() {
    const { name, phone, email, age, errors } = this.state;
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
                    name="name"
                    type="text"
                    placeholder="input first name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    type="text"
                    placeholder="your phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
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
