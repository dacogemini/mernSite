import React, { Component } from 'react';
import './Jumbotron.css';
import Image from 'react-image-resizer';


class Jumbotron extends Component {
  render() {
    return (
    <section className="container">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-60 ml-auto" src="https://lh3.googleusercontent.com/HNn3BKA7a-velWyaN4IvDu1qCvAp4QrZm_WvFCNXr3tZm8iGQsT6mAFIXqsnUnFdIPi0utDqP9OQ3slFIDwNqd_nMbTAXzqcZazJfmBJEPRM_9QnrPYGrWbipuMmSxbi3M099duBxA=w2400" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-60 ml-auto" src="https://lh3.googleusercontent.com/npvoQuRJed9el3nDjCPZ494q1PYuCXlsiByokx5c8fg7w2L-Ltkmr_qvrcTvftNXWgGmXwl9T1Bb5kOHEC6_Ft3HIPHyZpekiWAy0u8X9PXLzK69jmjrwwna2dUK_Vpxc1GapWthHw=w2400" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-60 ml-auto" src="https://lh3.googleusercontent.com/LMnIAtWNkn1dquj_EPqpFYA2yM4R17oS8y3nNltcQ0JPA8wcpoa83j1awlLUDbivmo5uOa2N7ONhpXsgM1No1fS9Dnmu_LMJoSufBI18diNWH9uDqOwJzFpMdcg9YDNcqsf2Nd-EEw=w2400" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
    </section>

    )
  }
}

export default Jumbotron;





