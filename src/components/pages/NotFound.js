import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div classname="card">
        <div className="card-header">
          <h1>
            <span className="text-danger">404 </span>Page Not Found.
          </h1>
        </div>
        <div calssname="card-body">
          <span classname="lead">
            <h4>Sorry page you try to access is not exist.</h4>
          </span>
          <span />
          <p>Sample Cantact Manager</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
