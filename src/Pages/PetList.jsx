import React, { useState, useEffect } from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Paper,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { database } from "../Services/firebase";
import { onValue, ref } from "firebase/database";

function PetList() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const query = ref(database, "petOwner");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((pet) => {
          setPets((pets) => [...pets, pet]);
        });
      }
    });
  }, []);
  return (
    <div className="flex flex-col p-10 w-full">
      <Paper className="w-3/5">
        {pets.map((pet, index) => (
          <Paper elevation={5} variant="outlined" className="m-5">
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>{pet.name} {pet.surname}</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                {pet.pets.petCins} {pet.pets.petName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>Dogum Tarihi : {pet.pets.petBirthday}</Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>Yaş Grubu : {pet.pets.petAgeGroup}</Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography component="div" gutterBottom>
                        Hasta Türü : {pet.pets.petHastaTuru}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography component="div" gutterBottom>
                        Irk : {pet.pets.petIrk}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography component="div" gutterBottom>
                        Cinsiyet : {pet.pets.petCinsiyet}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography component="div" gutterBottom>
                        Renk : {pet.pets.petColor}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography component="div" gutterBottom>
                        Ağırlık : {pet.pets.petWeight}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>Hayvan Hastalığı : {pet.pets.petHastalıgı}</Typography>
                    </Paper>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Düzenle</Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Paper>
    </div>
  );
}

export default PetList;
