import { Breadcrumbs, Typography, Link } from "@mui/material";
import React from "react";

function CustomBreadcrumbs() {
  return (
    <Breadcrumbs className="m-10">
      <Link underline="hover" color="inherit" href="/addPetOwnerScreen">
        Hayvan Sahibi Ekle
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/addAnimal"
      >
        Hayvan Ekle
      </Link>
      <Typography color="text.primary"></Typography>
    </Breadcrumbs>
  );
}

export default CustomBreadcrumbs;
