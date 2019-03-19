import React from "react";
import Image from "./image";

const Images = props => {
  return (
    <section>
      <div>
        {props.images.map(image => (
          <Image key={image.id} imageblock={image} />
        ))}
      </div>
    </section>
  );
};

export default Images;
