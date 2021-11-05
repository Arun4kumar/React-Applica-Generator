import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ButtonList from "./ButtonList";
const options = {
  hair: ["band", "curls", "default", "elegant", "fancy", "quiff", "short"],
  access: ["earings", "flower", "glasses", "headphone"],
  background: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red70",
    "red60",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
  ear: ["default", "tilt-backword", "tilt-forward"],
  eye: ["angry", "default", "naughty", "panda", "smart", "star"],
  leg: [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  mouth: ["astonished", "default", "eating", "laugh", "tongue"],
  neck: ["bend-backward", "bend-forward", "default", "thick"],
  nose: ["nose"],
};
const Interface = () => {
  const [visible, setVisible] = useState("hair");

  const [hair, setHair] = useState("default");
  const [access, setAccess] = useState("headphone");
  const [background, setBackground] = useState("blue50");
  const [ear, setEar] = useState("dafault");
  const [eye, setEye] = useState("default");
  const [leg, setLeg] = useState("default");
  const [mouth, setMouth] = useState("default");
  const [neck, setNeck] = useState("default");
  const [nose, setNose] = useState("nose");
  const list = {
    hair: [hair, setHair],
    access: [access, setAccess],
    background: [background, setBackground],
    ear: [ear, setEar],
    eye: [eye, setEye],
    leg: [leg, setLeg],
    mouth: [mouth, setMouth],
    neck: [neck, setNeck],
    nose: [nose, setNose],
  };

  return (
    <Container>
      <Row className="mb-5">
        <h5 className="dispaly-5">Accessorize Applica's</h5>
        <ButtonList
          active={visible}
          changeVisible={setVisible}
          options={Object.keys(list)}
        ></ButtonList>
      </Row>
      <Row>
        <h5 className="dispaly-5">Accessorize Applica's</h5>
        <ButtonList
          active={list[visible][0]}
          changeVisible={list[visible][1]}
          options={options[visible]}
        ></ButtonList>
      </Row>
    </Container>
  );
};

export default Interface;
