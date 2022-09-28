import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";

import Table from "../components/Table";
import AppHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import EditForm from "../components/EditForm";
import AppBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function App() {
  const [open, setOpen] = React.useState(false);

  // Toggle sidebar
  function handleDrawerToggle() {
    setOpen(!open);
  }

  return (
    <Box sx={{ display: "flex" }}>

      {/* Заголовок сайта (передаю пременную в потомка вместе с колбек функцией) */}
      <AppHeader open={open} toggleMenu={handleDrawerToggle} />

      {/* Панель слева */}
      <Sidebar open={open} toggleMenu={handleDrawerToggle} />

      {/* контейнер с динамическим контентом */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 11 }}>

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="ip" element={<Table />} />
          <Route path="edit" element={<EditForm />} />          
        </Routes>

      </Box>
    </Box>
  );
}
