import React from "react";
import Navbar from "./navbar";

type Props = {};

type State = {};

class Header extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <header className="header">
        <div className="logo">Iterout</div>
        <Navbar></Navbar>
      </header>
    );
  }
}

export default Header;
