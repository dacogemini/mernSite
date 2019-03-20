import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
      return (
        <div className="card text-center">
          <div className="card-header">
            ABOUT US
          </div>
          <div className="card-body">
            <h5 className="card-title">OUR HUMBLE BEGINNINGS</h5>
            <center>
            <p className="card-text">In 1989 Clark Wire & Cable opened its doors to the broadcast industry. The goal was to deliver highly engineered products built specifically for the unique demands of broadcast and professional AV coupled with exceptional customer service and value added support.
At Clark, we know that customers are the cornerstones of business. Over the past three decades of growth, customer service and support has remained Clark's top priority. Personalized service with our knowledgeable sales group and account managers 
ensures exceptional customer service and on-time delivery.<br /><br />
Leading and innovating in cable and connectivity technology, Clark has been first-to-market on many products that have evolved to become industry standards. Clark's most popular cable, the ribbon stereo, was the first of it's kind in the cable industry and to date we are still the only company that offers this bonded-style audio cable in multiple color combinations. Clark was also the first to market with remote composite cables, offering more variations than any other brand in the industry. 
Another notable first was our introduction of color-coding to audio snakes, for simplified channel identification and installation.<br /><br />
As broadcast and AV technologies evolved, Clark has continued to innovate with products such as gas-injected coax, hybrid fiber and tactical fiber cables for use with the latest HD video standards and applications.
As part of our solutions based service model, Clark also offers customized interconnect products. From cable assemblies and custom manufactured cables to metal fabrication and custom wired patchbays, Clark can deliver connectivity products built specifically for each system.

As Clark continues to grow and innovate in our markets, we continually strive to deliver leading edge products with our distinctive personalized service. We recognize the value and support of each and every customer, and look forward to continually earning your business.</p>
</center>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
      );
}
}
export default About;