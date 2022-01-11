import React, { useState } from "react";

import { Button, CardText } from "reactstrap";
import { BsJustify } from "react-icons/bs";

const SideBar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="sidebar-user">
      <div style={{ display: "flex" }}>
       <img width="12%" src="https://www.brandbucket.com/sites/default/files/logo_uploads/293798/large_shoparound_0.png"/>
        <div
          className="sidebar-user-container"
          onClick={() => setIsShown(!isShown)}
        >
          <BsJustify style={{ padding: "0 5px 7px" }} />
        </div>
        <div onClick={() => setIsShown(!isShown)}>SHOParound</div>
      </div>
      {isShown && (
        <div className="sidebar-details">
          <CardText style={{ marginLeft: "4rem" }}>Profile</CardText>
          <CardText style={{ marginLeft: "4rem" }}>About us</CardText>
          <CardText style={{ marginLeft: "4rem" }}>Email</CardText>
          <CardText style={{ marginLeft: "4rem" }}> change password</CardText>
        </div>
      )}
    </div>
  );
};

export default SideBar;
