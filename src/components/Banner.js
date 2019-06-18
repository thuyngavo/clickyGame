import React from 'react';

const Banner = props => (
  <article className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <h2 className="fw2 f4 lh-copy mt0 mb3 white">
    Click on an image to earn points, but don't click on any more than once!
    </h2>
    <p className="link dim white dib mr3" >Status: {props.status}</p>
      <p className="link dim white dib mr3" title="Store">Score: {props.currentScore} | Top Score: {props.topScore}</p>
  </article>
);
export default Banner;