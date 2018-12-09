import React, { Component } from "react";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    });
  }

  render() {
    return <div />;
  }
}

export default EditContact;
