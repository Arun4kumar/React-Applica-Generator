import React from "react";
import { Button, Row } from "react-bootstrap";

const ButtonList = ({ options, active: test, changeVisible }) => {
  return (
    <div className="g-2 d-flex flex-row flex-wrap">
      {options.map((option) => (
        <Button
          className="m-1"
          variant="outline-primary"
          onClick={() => {
            changeVisible(option);
          }}
          active={test === option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default ButtonList;
