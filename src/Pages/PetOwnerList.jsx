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
import { onValue, ref } from "firebase/database";
import React, { useState, useEffect } from "react";
import { database } from "../Services/firebase";

function PetOwnerList() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [petOwners, setPetOwners] = useState([]);

  useEffect(() => {
    const query = ref(database, "petOwner");

    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((petOwner) => {
          setPetOwners((petOwners) => [...petOwners, petOwner]);
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col p-10 w-full">
      <Paper className="w-3/5">
        {petOwners.map((petOwner, index) => (
          <Paper elevation={5} variant="outlined" className="m-5">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {petOwner.name} {petOwner.surname}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {petOwner.pets.petCins} {petOwner.pets.petName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>Dogum Tarihi : {}</Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>
                        TC Kimlik Numarası : {petOwner.tcno}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>
                        Email : {petOwner.email}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography component="div" gutterBottom>
                        Telefon Numarası : {petOwner.telno}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>
                        Adress : {petOwner.address}
                      </Typography>
                    </Paper>
                    <Paper elevation={3} variant="outlined" className="m-3">
                      <Typography gutterBottom>Toplam Borç :</Typography>
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

export default PetOwnerList;
