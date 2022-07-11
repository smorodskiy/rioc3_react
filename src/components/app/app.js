import React from "react";
import Table from "../app-table/table";
import Box from "@mui/material/Box";
import AppHeader from "../app-layout/app-header/app-header";
import Sidebar from "../app-layout/app-sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";

import EditForm from "../app-table/edit-form/edit-form";
import AppBreadcrumbs from "../breadcrumbs/breadcrumbs";

export default function App() {
  const [open, setOpen] = React.useState(false);

  // Открыть/Закрыть боковое меню
  function handleDrawerToggle() {
    setOpen(!open);
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

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
