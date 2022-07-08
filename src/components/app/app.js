import React from "react";
import Table from "../app-table/table-content";
import Box from "@mui/material/Box";
import AppHeader from "../app-header/app-header";
import AppDrawer from "../app-drawer/drawer";

import "./app.css";

import EditForm from "../app-table/edit/edit-form";
import AppBreadcrumbs from "../app-breadcrumbs/app-breadcrumbs";

export default function App() {
  const [open, setOpen] = React.useState(false);

  function handleDrawerToggle() {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      {/* Заголовок сайта (передаю пременную в потомка вместе с колбек функцией) */}
      <AppHeader open={open} toggleMenu={handleDrawerToggle} />
      {/* Панель слева */}
      <AppDrawer open={open} toggleMenu={handleDrawerToggle} />

      {/* контейнер с динамическим контентом */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 11 }}>
        


        {/* Форма для редактирования/добавления */}
        <EditForm/>

        {/* Таблица с данными */}
        <Table />

      </Box>

    </Box>
  );
}
