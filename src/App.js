import { Row, Col, Button, Container } from "react-bootstrap";
import React, { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";

import CustomImage from "./Components/CustomImage";
import ButtonList from "./Components/ButtonList";
const options = {
  hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
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
  ear: ["default", "tilt-backward", "tilt-forward"],
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

function App() {
  const [visible, setVisible] = useState("hair");

  const [hair, setHair] = useState("default");
  const [access, setAccess] = useState("headphone");
  const [background, setBackground] = useState("blue50");
  const [ear, setEar] = useState("default");
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

  const data = {
    hair: `Images/hair/${hair}.png`,
    access: `Images/access/${access}.png`,
    background: `Images/backgrounds/${background}.png`,
    ear: `Images/ears/${ear}.png`,
    leg: `Images/leg/${leg}.png`,
    mouth: `Images/mouth/${mouth}.png`,
    neck: `Images/neck/${neck}.png`,
    nose: "Images/nose.png",
    eye: `Images/eyes/${eye}.png`,
  };

  const ref = useRef();

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="bg-light">
      <Container className="mt-3 ">
        <h3 className="display-3">Applica Generator</h3>
        <Row>
          <Col xs={12} md={6}>
            <CustomImage ref={ref} data={data} />
          </Col>
          <Col>
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
                <h5 className="dispaly-5">Styles</h5>
                <ButtonList
                  active={list[visible][0]}
                  changeVisible={list[visible][1]}
                  options={options[visible]}
                ></ButtonList>
              </Row>
              <Row className="mt-3">
                <h5 className="dispaly-5">Save</h5>
                <Container>
                  <Button variant="success" size="lg" onClick={onButtonClick}>
                    Save
                  </Button>
                </Container>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
