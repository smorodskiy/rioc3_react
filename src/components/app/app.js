import React from "react";
import Table from "../app-table/app-table-content";
import Box from "@mui/material/Box";
import AppHeader from "../app-header/app-header";
import AppDrawer from "../app-drawer/app-drawer";

import "./app.css";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };


  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      {/* передаю пременную в потомка вместе с колбек функцией */}
      <AppHeader open={open} func={handleDrawerToggle} />

      <AppDrawer open={open} func={handleDrawerToggle} />

      <Box component="main" sx={{ flexGrow: 1, p: 3, pt:11}}>
        <Table />
      </Box>
    </Box>
  );
}
