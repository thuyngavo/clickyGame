import React from "react";

const NavBar = props => (
  <header className=" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
    <nav className="f6 fw6 ttu tracked">
      <h1 className="link dim white dib mr3"  title="Home">Let's Play A Memory Game</h1>
      <p className="link dim white dib mr3" >Status: {props.status}</p>
      <p className="link dim white dib mr3" title="Store">Score: {props.currentScore} | Top Score: {props.topScore}</p>
    </nav>
  </header>
)

export default NavBar;