import React, { useState } from "react";
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


function PetList() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col p-10 w-full">
      <Paper className="w-3/5">
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
                İsmail Kurt
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Kuş Fıstık
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography gutterBottom>Dogum Tarihi :</Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography gutterBottom>Yaş Grubu :</Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography component="div" gutterBottom>
                      Hasta Türü :
                    </Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography component="div" gutterBottom>
                      Irk :
                    </Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography component="div" gutterBottom>
                      Cinsiyet :
                    </Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography component="div" gutterBottom>
                      Renk :
                    </Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography component="div" gutterBottom>
                      Ağırlık :
                    </Typography>
                  </Paper>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography gutterBottom>Hayvan Hastalığı :</Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                  <Button size="small">Düzenle</Button>
                </CardActions>
              </Card>
            </AccordionDetails>
          </Accordion>
        </Paper> 
      </Paper>
    </div>
  );
}

export default PetList;
