import React from "react";
import Auxy from "../../hoc/Auxy";
import ReactAudioPlayer from "react-audio-player";
import { Card } from "react-bootstrap";

const Episode = (props) => {
  return (
    <Auxy>
     
      <Card style={{ width: "22rem", marginTop:"20px"}}>
        <Card.Body>
          <Card.Title>First Episode</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Introduction
          </Card.Subtitle>
          <Card.Text>
            Short introduction about me and what I do.
          </Card.Text>
          <ReactAudioPlayer src="adeseyebanmeke.mp4" autoPlay controls />
        </Card.Body>
      </Card>
      

     
    </Auxy>
  );
};
export default Episode;
