import React, { Component } from 'react';
import Image from 'react-image-resizer';
import './Tradecard.css';


class Tradecard extends Component {
    render() {
      return (
        <div className="trade-card border border-info rounded" style={{width: '18rem'}}>
        <center>
        <img className="card-img-top trade" src="https://lh3.googleusercontent.com/kWpiOPlD6QM5FF2_vUAGuOFuyQfp7c5pjj4e__VxhsU4Ck7gDrkXrNvNI3CFuGc0TpYMsPKHTWmCOr5Pq-8TJuNdn0RL4ov6-OL8y_9tnEi5DoAM6QV4CuaBP8iD1SnIn1z6SywpuQ=w2400" alt="Card image cap" />
        </center>
        <center>
        <div className="card-body">
            <p>UPCOMING TRADE SHOWS</p>
            <h6>APRIL 6TH - APRIL 11TH</h6>
        </div>
        </center>
        </div>

      );
    }
  }
export default Tradecard;