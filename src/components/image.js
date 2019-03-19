import React from "react";
import "../App.css";

const Image = props => {
  return (
    <aside>
      <div>
        <img src={props.photoItem.url} alt="images"/>
      </div>
    </aside>
  );
};

export default Image;
