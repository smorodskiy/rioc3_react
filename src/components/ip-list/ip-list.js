// import * as React from "react";

import "./ip-list.css";

import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

const rows = [
  {
    id: 1,
    ip: "102.100.100.100",
    network: "100.410.300.100",
    subnet_mask: "255.255.255.255",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 2,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 3,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 4,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 5,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 6,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 7,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 8,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 9,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 10,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 11,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 12,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 13,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 15,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 16,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 17,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 18,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 19,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 20,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 21,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 22,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 23,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
];

function createData(
  id,
  ip,
  network,
  subnet_mask,
  network_prefix,
  place_name,
  location,
  mac,
  hardware_type,
  description
) {
  return {
    id,
    ip,
    network,
    subnet_mask,
    network_prefix,
    place_name,
    location,
    mac,
    hardware_type,
    description,
  };
}

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3,0,0,0,0),
//   createData('Cupcake', 305, 3.7, 67, 4.3,0,0,0,0)
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Ячейки в заголовке таблицы(массив из объектов)
const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "ip",
    numeric: true,
    disablePadding: false,
    label: "IP",
  },
  {
    id: "network",
    numeric: true,
    disablePadding: false,
    label: "Network",
  },
  {
    id: "subnet_mask",
    numeric: true,
    disablePadding: false,
    label: "Subnet mask",
  },
  {
    id: "network_prefix",
    numeric: true,
    disablePadding: false,
    label: "Network prefix",
  },
  {
    id: "place_name",
    numeric: true,
    disablePadding: false,
    label: "Place name",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Location",
  },
  {
    id: "mac",
    numeric: true,
    disablePadding: false,
    label: "MAC",
  },
  {
    id: "hardware_type",
    numeric: true,
    disablePadding: false,
    label: "Hardware type",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
];

// Заголовок таблицы
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  // Состояния
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");  
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  // Событие нажатие на строку в таблице(формируется массив из индексов выделенных элементов)
  const handleClick = (event, id) => {
    // поиск элемента в сохранненом списке Выделенных
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      // Если в списке выделенных такого элемента еще нет, то добавляем
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      // Если элемент уже есть, и он первый в списке, убираем его
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      // Если элемент есть и он последний в списке, убираем его
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      // в любом другом случае когда индекс больше 0, удаляем его
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    // box - wrapper for comps
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
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
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // привязка к событию на клик на строке, выполняется функция handleClick(событие, номер ячейки)
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.ip}</TableCell>
                      <TableCell align="right">{row.network}</TableCell>
                      <TableCell align="right">{row.subnet_mask}</TableCell>
                      <TableCell align="right">{row.network_prefix}</TableCell>
                      <TableCell align="right">{row.place_name}</TableCell>
                      <TableCell align="right">{row.location}</TableCell>
                      <TableCell align="right">{row.mac}</TableCell>
                      <TableCell align="right">{row.hardware_type}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
