import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

function AddPetOwnerScreen() {

  const CustomButton = styled(Button)({
    backgroundColor: "#111827",
    "&:hover": {
      backgroundColor: "#374151",
    },
  });

  const [form, setForm] = useState({
    isim: "",
    surname: "",
    tcno: "",
    email: "",
    telno: "",
    addres: "",
  });



  return (
    <div className=" flex flex-col h-screen w-screen items-center ">
      <Typography variant="h3" m={12}>
        Yeni Hayvan Sahibi Ekle
      </Typography>
      <FormGroup>
        <div className="flex flex-col items-center  ">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mx: 2.5, my: 2.5, width: "25ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              name="isim"
              label="İsim"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              name="surname"
              label="Soyisim"
              variant="outlined"
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              name="tcno"
              label="TC Kimlik Numarası"
              type="number"
              variant="outlined"
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              name="telno"
              label="Telefon"
              variant="outlined"
              type="tel"
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, mx: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="outlined-basic"
              name="addres"
              label="Mahalle, sokak, cadde, ilçe ve il bilgisi giriniz."
              variant="outlined"
              type="text"
              multiline
              rows={3}
            />
          </Box>

          <CustomButton variant="contained" size="large">
            Kaydet
          </CustomButton>
        </div>
      </FormGroup>
    </div>
  );
}

export default AddPetOwnerScreen;
