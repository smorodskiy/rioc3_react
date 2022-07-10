// import * as React from "react";

import "./table-content.css";

import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import EnhancedTableToolbar from "./table-toolbar"
import EnhancedTableHead from "./table-header";

import {rows} from '../../fake-base'
import AppBreadcrumbs from "../breadcrumbs/breadcrumbs";
import TableContent from "./table-content";

// function createData(
//   id,
//   ip,
//   network,
//   subnet_mask,
//   network_prefix,
//   place_name,
//   location,
//   mac,
//   hardware_type,
//   description
// ) {
//   return {
//     id,
//     ip,
//     network,
//     subnet_mask,
//     network_prefix,
//     place_name,
//     location,
//     mac,
//     hardware_type,
//     description,
//   };
// }


// Основной компонент
export default function EnhancedTable() {
  // Состояния
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");  
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Событие нажатия на Сортировку
  const handleRequestSort = (event, property) => {
    console.log(`prop - ${property}, oB - ${orderBy}, o - ${order}`);

    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Событие нажатия на кнопку Выделить все
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);      
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    // box - wrapper for comps
    <Box sx={{ width: "100%" }}>
      
      {/* переходы */}
      <AppBreadcrumbs />
      
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            {/* Отрисовка заголовка таблицы */}
            <EnhancedTableHead
              // количество выделенных строчек
              numSelected={selected.length}
              // тип сортировки от А до Я или Я до А
              order={order}
              // айди колонки которую сортируем
              orderBy={orderBy}
              // Клик на кнопку "выделить все"
              onSelectAllClick={handleSelectAllClick}
              // клик на одну из кнопок сортировки
              onRequestSort={handleRequestSort}
              // количество колонок
              rowCount={rows.length}
            />
            
            <TableContent sortProps={{
              rows, order, orderBy, page, rowsPerPage, selected
            }}/>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
