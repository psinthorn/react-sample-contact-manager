import React, { Component } from "react";

class ImageUpload extends Component {
  ImageInputHandler = e => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.ImageInputHandler} />
      </div>
    );
  }
}

export default ImageUpload;
