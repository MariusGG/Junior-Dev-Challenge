import React from "react";


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
