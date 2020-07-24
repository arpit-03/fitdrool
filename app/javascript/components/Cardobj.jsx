import React, { Component } from "react";
import { Card } from "react-bootstrap";
class Cardobj extends Component {
  render() {
    return (
      <Card className="card" style={{ width: "200px" }}>
        <Card.Img className="imgscroll" variant="top" src={this.props.link} />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default Cardobj;
