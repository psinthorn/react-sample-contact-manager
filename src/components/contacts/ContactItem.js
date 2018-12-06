import React, { Component } from "react";
import { Consumer } from "./../../context";

class ContactItem extends Component {
  state = {
    showContactInfo: false
  };

  onClickDelete = (id, dispatch) => {
    console.log(id);
    console.log(dispatch);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    const { id, fname, lname, email, age } = this.props;
    const showInfo = this.state.showContactInfo;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {fname}{" "}
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
              </h4>
              {showInfo ? (
                <ul>
                  <li> First Name: {fname} </li>
                  <li> Last Name: {lname} </li>
                  <li> Email: {email} </li>
                  <li> Age: {age} </li>
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
