import React from "react";
import { Nav, Navbar } from "rsuite";

const NavToggle = ({ expand, onChange }) => {
    const iconStyles = {
        width: 56,
        height: 56,
        padding: 18,
        lineHeight: '56px',
        textAlign: 'center'
      };

    return (
      <Navbar appearance="subtle" className="nav-toggle">
        {/* <Navbar.Body> */}
          <Nav>
            <Nav.Menu
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                // return <Cog style={iconStyles} />;
              }}
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