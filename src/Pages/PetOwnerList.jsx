import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React, { useState } from "react";

const ownerColumns = [
    { id: "name", label: "Name", minWidth: 100 },
    { id: "surname", label: "Surname", minWidth: 100 },
    {
        id: "email",
        label: "Email",
        minWidth: 170,
    },
    {
        id: "tc",
        label: "TC Kimlik No",
        minWidth: 170,
    },
    {
        id: "telefon",
        label: "Telefon No",
        minWidth: 170,
    },
    {
        id: "addres",
        label: "Adres",
        minWidth: 170,
    },
];

function createData(name, surname, email, tc, telefon, addres) {
    return { name, surname, email, tc, telefon, addres };
}

const ownerRows = [
    createData(
        "İsmail",
        "Kurt",
        "ismail.kurtf@gmail.com",
        41062252754,
        "05550165180",
        "Ankara Eryaman"
    ),
    createData(
        "Hasan",
        "Özdemir",
        "hasan.özdemir@gmail.com",
        41062252750,
        "05550165184",
        "Mersin Eryaman"
    ),
    createData(
        "Deniz",
        "Ulucan",
        "deniz@gmail.com",
        41062252751,
        "05550165183",
        "İstanbul Eryaman"
    ),
    createData(
        "Alperen",
        "Aydın",
        "alperen@gmail.com",
        41062252752,
        "05550165182",
        "Çankırı Eryaman"
    ),
    createData(
        "Sinan",
        "Öztürk",
        "sinan@gmail.com",
        41062252753,
        "05550165110",
        "Kastamonu Eryaman"
    ),
];

function PetOwnerList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", m: 10 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {ownerColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ownerRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {ownerColumns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={ownerRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default PetOwnerList;
