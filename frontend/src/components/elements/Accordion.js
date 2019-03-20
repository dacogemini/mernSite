import React, { Component } from 'react';
import './Accordion.css';

class Accordion extends Component {
    render() {
      return (
        <ul className="list-group">
        <li className="list-group-item list-head">CABLES</li>
        <li className="list-group-item">AUDIO</li>
        <li className="list-group-item">VIDEO</li>
        <li className="list-group-item">CAMERA</li>
        <li className="list-group-item">COMPOSITE</li>
        <li className="list-group-item">NETWORK</li>
        <li className="list-group-item">LIGHTING/CONTROL</li>
        <li className="list-group-item">OPTICAL FIBER</li>
        </ul>


      );
    }
  }
export default Accordion;