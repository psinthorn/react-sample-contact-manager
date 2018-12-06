import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div classname="card">
        <div className="card-header">
          <h1>
            <span className="text-danger">404</span>Page Not Found.
          </h1>
        </div>
        <div calssname="card-body">
          <span>Sorry page you try to access is not exist.</span>
          <span>Cantact Manager</span>
          <span>Version 6.12.18</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
