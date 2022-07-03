import React, { Component } from "react";
import { Nav, Navbar } from "rsuite";

import './nav-toggle.css'

const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        {/* <Navbar.Body> */}
          <Nav>
            <Nav.Menu
              placement="topStart"
              trigger="click"
              // menuStyle={}
              title=""
              // <Cog style={iconStyles} />
            >
              <Nav.Item>Help</Nav.Item>
              <Nav.Item>Settings</Nav.Item>
              <Nav.Item>Sign out</Nav.Item>
            </Nav.Menu>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
               {/* {expand ? <AngleLeft /> : <AngleRight />} */}
            </Nav.Item>
          </Nav>
        {/* </Navbar.Body> */}
      </Navbar>
    );
  };

  export default NavToggle;