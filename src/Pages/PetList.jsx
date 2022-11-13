import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import React, { useState } from "react";
import { createPetData } from "../Services/createData";

const ownerColumns = [
    { id: "name", label: "Hayvan Sahbibi İsmi", minWidth: 100 },
    { id: "surname", label: "Hayvan Sahbibi Soyismi", minWidth: 100 },
    {
        id: "petName",
        label: "Pet Name",
        minWidth: 170,
    },
    {
        id: "disease",
        label: "Hayvan Hastalığı",
        minWidth: 170,
    },
];

const ownerRows = [
    createPetData(
        "İsmail",
        "Kurt",
        "Fındık",
        "Aşı",
    ),
    createPetData(
        "Hasan",
        "Özdemir",
        "Tekir",
        "Kırık",
    ),

];


function PetList() {

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
  )
}

export default PetList