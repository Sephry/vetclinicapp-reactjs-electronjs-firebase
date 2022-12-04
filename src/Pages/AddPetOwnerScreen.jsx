import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { database } from "../Services/firebase";
import { ref, set } from "firebase/database";
import { Link } from "react-router-dom";
import CustomBreadCrumbs from "../Common/CustomBreadCrumbs";

function AddPetOwnerScreen() {
  const CustomButton = styled(Button)({
    backgroundColor: "#111827",
    "&:hover": {
      backgroundColor: "#374151",
    },
  });

  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [tcno, setTcno] = useState(null);
  const [telno, setTelno] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "surname") {
      setSurname(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "tcno") {
      setTcno(value);
    }
    if (id === "telno") {
      setTelno(value);
    }
    if (id === "address") {
      setAddress(value);
    }
  };

  const handleSubmit = () => {
    let obj = {
      name: name,
      surname: surname,
      tcno: tcno,
      email: email,
      telno: telno,
      address: address,
      pets: [""],
    };
    set(ref(database, "petOwner/" + tcno), obj);
  };

  return (
    <div className=" flex flex-col h-screen w-screen items-center ">
      <CustomBreadCrumbs />
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
              id="name"
              name="isim"
              label="İsim"
              variant="outlined"
              value={name}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="surname"
              name="surname"
              label="Soyisim"
              variant="outlined"
              value={surname}
              onChange={(e) => handleInputChange(e)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="tcno"
              name="tcno"
              label="TC Kimlik Numarası"
              type="number"
              variant="outlined"
              value={tcno}
              onChange={(e) => handleInputChange(e)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="telno"
              name="telno"
              label="Telefon"
              variant="outlined"
              type="tel"
              value={telno}
              onChange={(e) => handleInputChange(e)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 2.5, mx: 2.5, width: "55ch" },
            }}
          >
            <TextField
              id="address"
              name="address"
              label="Mahalle, sokak, cadde, ilçe ve il bilgisi giriniz."
              variant="outlined"
              type="text"
              multiline
              rows={3}
              value={address}
              onChange={(e) => handleInputChange(e)}
            />
          </Box>

          <Link
            variant="contained"
            size="large"
            type="submit"
            onClick={() => handleSubmit()}
            to={"/addAnimal"}

          >
            Kaydet
          </Link>
        </div>
      </FormGroup>
    </div>
  );
}

export default AddPetOwnerScreen;
