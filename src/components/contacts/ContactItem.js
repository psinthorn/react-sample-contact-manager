import React, { Component } from "react";
import { Consumer } from "./../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class ContactItem extends Component {
  state = {
    showContactInfo: false
  };

  onClickDelete = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    console.log(this.props);
    const { id, name, phone, email } = this.props;
    const showInfo = this.state.showContactInfo;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                    onClick={this.onClickDelete.bind(this, id, dispatch)}
                  />
                </Link>
              </h4>
              {showInfo ? (
                <ul>
                  <li> ID: {id} </li>
                  <li> First Name: {name} </li>
                  <li> Email: {email} </li>
                  <li> Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactItem;
