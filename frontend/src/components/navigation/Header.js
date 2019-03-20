import React, { Component } from 'react';


class Header extends Component {
    render() {
      return (
        <div>
        <div>
        <div className="container">
            <div className="container-res">
              <table className="table">
                <thead>
                  <tr>
                  <td id="head">
                  <i className="fas fa-award" />
                  </td>
                  <td id="head">
                  CELEBRATING 30 YEARS IN BUSINESS
                  </td>
                  <td id="head">
                  <i className="fas fa-phone-volume" />
                  </td>
                  <td id="head">
                  (800)222-5348</td>
                  <td id="head">
                  <i className="fab fa-twitter-square" />
                  </td>
                  <td id="head">
                    <i className="fab fa-linkedin">
                    <i className="fas fa-at">
                    </i></i>

                  </td>
                  </tr>
                </thead>
              </table>
            </div>
            </div>
          </div>
          <center>
          <div className="alert alert-dark">
      </div>
      </center>
</div>
    );
}
}

export default Header