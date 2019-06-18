import React from 'react';

const Banner = props => (
  <article className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <p className="link dim white dib mr3" >{props.status} | Score: {props.currentScore} | Top Score: {props.topScore}</p>
  </article>
);
export default Banner;