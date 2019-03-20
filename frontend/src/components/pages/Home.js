import React, { Component } from 'react';
import Carousel from '../elements/Carousel';
import Maincards from '../elements/Maincards';
import Tradecard from '../elements/Tradecard';


class Home extends Component {
  render() {
    return (
        <div>
          <Carousel />
          <Maincards />
          <Tradecard />
        </div>
    );
  }
}

export default Home;