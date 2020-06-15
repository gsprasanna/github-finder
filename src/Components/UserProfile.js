import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Typed from "react-typed";
const UserProfile = ({ followers, avatarUrl, userDetails }) => {
  debugger;
  return (
    <div className="App">
      <div className="flex-container">
        <div className="flex-image">
          <Image src={avatarUrl} height="200px" roundedCircle />
        </div>
        <div className="flex-content">
          {userDetails.items ? (
            <h2 className="username">{userDetails.items[0].login}</h2>
          ) : (
            ""
          )}
          {followers >= 0 ? (
            <h5 style={{ color: "green" }}>
              <Typed
                strings={[followers + "followers"]}
                typeSpeed={40}
                backSpeed={90}
                loop
              />
            </h5>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
