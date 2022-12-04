import { Button, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CustomBreadCrumbs from "../Common/CustomBreadCrumbs";
import { ref, update } from "firebase/database";
import { database } from "../Services/firebase";
import { Link } from "react-router-dom";


function AddAnimalScreen() {
  const CustomButton = styled(Button)({
    backgroundColor: "#111827",
    "&:hover": {
      backgroundColor: "#374151",
    },
  });

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
    const {id, value } = e.target;
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
  }

  const handleSubmit = () => {

    let petObj = {
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
    };

    const updates = {};
    updates["/petOwner/000000/pets/"] = petObj;

    update(ref(database),updates)

  };

  return (
    <div className=" flex flex-col h-screen w-screen items-center ">
      <CustomBreadCrumbs />
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
      </FormGroup>
    </div>
  );
}

export default AddAnimalScreen;
