import PropTypes from "prop-types";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

import { rows } from "../../fake-base";

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
  // {
  //   id: "actions",
  //   numeric: true,
  //   disablePadding: true,
  //   label: "Actions",
  // }
];

// Заголовок таблицы
// функциональный компонент
export default function EnhancedTableHead(props) {
  // вытягивание всех атрибутов их компомнента и деструктуризируем
  const { order, orderBy, numSelected, 
          rowCount, setSelected,
          setOrder, setOrderBy
        } = props;

  const onRequestSort = (property) => () => {
    console.log(`prop - ${property}, oB - ${orderBy}, o - ${order}`);
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Событие нажатия на кнопку Выделить все
  const onSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
              onClick={onRequestSort(headCell.id)}
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

// проверка типов с помощью реакта
EnhancedTableHead.propTypes = {
  // количество выделенных - должно быть число, обязательно
  numSelected: PropTypes.number.isRequired,
  // onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
