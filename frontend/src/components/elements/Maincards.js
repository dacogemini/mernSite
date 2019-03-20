import React, { Component } from 'react';
import './Maincards.css';

class Maincards extends Component {
    render() {
      return (
        <div className="card-deck">
        <div className="card">
            <center>
            <img className="card-img-top" src="https://lh3.googleusercontent.com/NolLMqPyYUbxdLs4ZxplVm3i-CR8wiiWlY-MwTBh55oIogecA75q1gS27U-nuCJioBOcm81Yn8QepR3rS_WxXikqOGJSX6KrFPeahpI5BFXkbrsha105z-MEKEgPc31qJgXTyKuAxw=s225-p-k" alt="Card image cap" />
            </center>
            <div className="card-body">
            <center>
            <h5 className="card-title">NEW PRODUCTS</h5>
            </center>
            <p className="card-text">SMPTE Tester.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <center>
            <img className="card-img-top" src="https://lh3.googleusercontent.com/_mi1_46zka_utNAgf3wLMMHubHQ6zbGWf8GkPVBz70NmCJ60fsH4e2HusfCyUSBEJinxrZk22u2I-wiKlZwerCFhL4wHfx_6JDgRil-QVt_6Yx-WYJmfi0zwNOr0arALrylVDs5fKw=s184-p-k"  alt="Card image cap" />
            </center>
            <div className="card-body">
            <center>
            <h5 className="card-title">FEATURED PRODUCTS</h5>
            </center>
            <p className="card-text">additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <center>
            <img className="card-img-top" src="https://lh3.googleusercontent.com/1H1kZq6__zz0zp_bB0cnShi_t2ceqk8--eHE9O5X7wQYJNX99xxshbW_CqFnSdvBhUpYsNirnIqZp4AVySeVKzFofo2FeDTLeL7vDfAn4UaPuDmfBOikfPj45Jtr8Ct80G3ci9CcDA=s300-p-k" alt="Card image cap" />
            </center>
            <div className="card-body">
            <center>
            <h5 className="card-title">NEWS</h5>
            </center>
            <p className="card-text">equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
      );
    }
  }
export default Maincards;