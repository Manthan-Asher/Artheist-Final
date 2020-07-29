import React from "react";
import { Image } from "semantic-ui-react";
const ImageGetter = () => {
  return (
    <div
      className="ui container"
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="image"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* <image
          className="ui image rounded"
          src={require("../../assets/default-avatar.jpg")}
          height="200px"
          width="100px"
        /> */}
        <Image
          src={require("../../assets/default-avatar.jpg")}
          circular
          height="200px"
          width="200px"
        />
      </div>
      <form className="ui big form">
        <div className="field">
          <label>Profile Image</label>
          <input type="file" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" className="ui big blue button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageGetter;
