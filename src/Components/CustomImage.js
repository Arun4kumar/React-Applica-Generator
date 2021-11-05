import React from "react";
import { Image } from "react-bootstrap";
const CustomImage = React.forwardRef(({ data }, ref) => {
  const { hair, ear, eye, mouth, neck, leg, access, nose, background } = data;
  return (
    <div
      ref={ref}
      style={{
        height: "500px",
        position: "relative",
      }}
    >
      <Image className="position-absolute" fluid src={background} />

      <Image className="position-absolute" fluid src={neck} />

      <Image className="position-absolute" fluid src={ear} />

      <Image className="position-absolute" fluid src={nose} />

      <Image className="position-absolute" fluid src={leg} />

      <Image className="position-absolute" fluid src={hair} />

      <Image className="position-absolute" fluid src={eye} />

      <Image className="position-absolute" fluid src={mouth} />

      <Image className="position-absolute" fluid src={access} />
    </div>
  );
});

export default CustomImage;
