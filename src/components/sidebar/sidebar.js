import React from "react";
import { Sidebar, Sidenav, Nav } from "rsuite";
import NavToggle from "./sidebar-toggle";
import SettingsIcon from '@mui/icons-material/Settings';

import './sidebar.css';

const Sidemenu = () => {

  const [expand, setExpand] = React.useState(true);
  return (
    <Sidebar
      className="sidebar"
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav.Header>
        <div className="sidebar-header">
          {/* <LogoAnalytics style={{ fontSize: 20 }} /> */}
          <span style={{ marginLeft: 12 }}>РІОЦ-3</span>
        </div>
      </Sidenav.Header>

      <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
        <Sidenav.Body>
          <Nav>
           
            <Nav.Item icon={<SettingsIcon />} eventKey="1" active>
              Панель приладів
            </Nav.Item>
            
            <Nav.Item icon={<SettingsIcon />} eventKey="2">База</Nav.Item>
            <Nav.Menu
              eventKey="3"
              trigger="hover"
              title="Інше"
              icon={<SettingsIcon />}
              placement="rightStart"
            >
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Brand</Nav.Item>
              <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              eventKey="4"
              trigger="hover"
              title="Налаштування"
              icon={<SettingsIcon />}
              placement="rightStart"
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Websites</Nav.Item>
              <Nav.Item eventKey="4-3">Channels</Nav.Item>
              <Nav.Item eventKey="4-4">Tags</Nav.Item>
              <Nav.Item eventKey="4-5">Versions</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>

      <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
    </Sidebar>
  );
};

export default Sidemenu;
