import * as React from "react";
import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

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

export default function TableContent(props) {
  const { rows, order, orderBy, page, 
          rowsPerPage, selected, setSelected } = props.sortProps;

  const isSelected = (id) => selected.indexOf(id) !== -1;

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

  return (
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

              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  onClick={(event) => handleClick(event, row.id)}
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
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    // height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
    </TableBody>
  );
}
