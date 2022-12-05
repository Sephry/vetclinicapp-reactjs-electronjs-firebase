import React, { useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../Services/firebase";
import { Box, FormGroup, TextField, Typography } from "@mui/material";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { data } from "autoprefixer";
import { ref, set } from "firebase/database";

function AddScreen() {
  //oet Owner
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [tcno, setTcno] = useState(null);
  const [telno, setTelno] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);

  const [petName, setPetName] = useState(null);
  const [petCins, setPetCins] = useState(null);
  const [petBirthday, setPetBirthday] = useState(null);
  const [petAgeGroup, setAgeGroup] = useState(null);
  const [petHastaTuru, setHastaTuru] = useState(null);
  const [petIrk, setPetIrk] = useState(null);
  const [petCinsiyet, setPetCinsiyet] = useState(null);
  const [petColor, setPetColor] = useState(null);
  const [petWeight, setPetWeight] = useState(null);
  const [petHastalıgı, setPetHastalıgı] = useState(null);

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
    if (id === "petName") {
      setPetName(value);
    }
    if (id === "petCins") {
      setPetCins(value);
    }
    if (id === "petBirthday") {
      setPetBirthday(value);
    }
    if (id === "petAgeGroup") {
      setAgeGroup(value);
    }
    if (id === "petHastaTuru") {
      setHastaTuru(value);
    }
    if (id === "petIrk") {
      setPetIrk(value);
    }
    if (id === "petCinsiyet") {
      setPetCinsiyet(value);
    }
    if (id === "petColor") {
      setPetColor(value);
    }
    if (id === "petWeight") {
      setPetWeight(value);
    }
    if (id === "petHastalıgı") {
      setPetHastalıgı(value);
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
      pets: {
        petName: petName,
        petCins: petCins,
        petBirthday: petBirthday,
        petAgeGroup: petAgeGroup,
        petHastaTuru: petHastaTuru,
        petIrk: petIrk,
        petCinsiyet: petCinsiyet,
        petColor: petColor,
        petWeight: petWeight,
        petHastalıgı: petHastalıgı,
      },
    };
    set(ref(database, "petOwner/" + tcno), obj);
  };

  return (
    <div className="flex flex-row h-screen w-screen items-center">
      <div className=" flex flex-col h-screen items-center ">
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
          </div>
        </FormGroup>
      </div>

      <div className=" flex flex-col w- h-screen items-center ">
        <Typography variant="h3" m={12}>
          Yeni Hayvan Ekle
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
                id="petName"
                name="petName"
                label="Hayvanın İsmi"
                variant="outlined"
                value={petName}
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                id="petCins"
                name="petCins"
                label="Hayvanın Cinsi"
                variant="outlined"
                value={petCins}
                onChange={(e) => handleInputChange(e)}
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mx: 2.5, my: 2.5, width: "25ch" },
              }}
            >
              <TextField
                id="petBirthday"
                name="petBirthday"
                label="Hayvanın Dogum Tarihi"
                variant="outlined"
                value={petBirthday}
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                id="petAgeGroup"
                name="petAgeGroup"
                label="Hayvanın Yas Grubu"
                variant="outlined"
                value={petAgeGroup}
                onChange={(e) => handleInputChange(e)}
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mx: 2.5, my: 2.5, width: "25ch" },
              }}
            >
              <TextField
                id="petIrk"
                name="petIrk"
                label="Hayvanın Irkı"
                variant="outlined"
                value={petIrk}
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                id="petCinsiyet"
                name="petCinsiyet"
                label="Hayvanın Cinsiyeti"
                variant="outlined"
                value={petCinsiyet}
                onChange={(e) => handleInputChange(e)}
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { mx: 2.5, my: 2.5, width: "25ch" },
              }}
            >
              <TextField
                id="petColor"
                name="petColor"
                label="Hayvanın Rengi"
                variant="outlined"
                value={petColor}
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                id="petWeight"
                name="petWeight"
                label="Hayvanın Agırlığı"
                variant="outlined"
                value={petWeight}
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
                id="petHastalıgı"
                name="petHastalıgı"
                label="Hayvanın Hastalık Türü"
                variant="outlined"
                value={petHastalıgı}
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
                id="petHastalıgı"
                name="petHastalıgı"
                label="Hayvanın Hastalığı"
                variant="outlined"
                type="text"
                multiline
                rows={3}
                value={petHastalıgı}
                onChange={(e) => handleInputChange(e)}
              />
            </Box>
          </div>
        </FormGroup>
      </div>
      <Link
        variant="contained"
        size="large"
        type="submit"
        onClick={() => handleSubmit()}
        to={"/"}
      >
        Kaydet
      </Link>
    </div>
  );
}

export default AddScreen;
