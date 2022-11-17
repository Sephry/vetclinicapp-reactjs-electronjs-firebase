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
import React, { useState } from "react";

function PetOwnerList() {
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
                    <Typography gutterBottom>Uyarı Notu :</Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                  <Button size="small">Düzenle</Button>
                </CardActions>
              </Card>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <Paper elevation={5} variant="outlined" className="m-5">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Sinan Öztürk
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Fındık Kedi
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography gutterBottom>Dogum Tarihi :</Typography>
                  </Paper>
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
                    <Typography gutterBottom>Uyarı Notu :</Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                  <Button size="small">Düzenle</Button>
                </CardActions>
              </Card>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <Paper elevation={5} variant="outlined" className="m-5">
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3h-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Deniz Ulucan
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Tekir Köpek
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography gutterBottom>Dogum Tarihi :</Typography>
                  </Paper>
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
                    <Typography gutterBottom>Uyarı Notu :</Typography>
                  </Paper>
                </CardContent>
                <CardActions>
                  <Button size="small">Düzenle</Button>
                </CardActions>
              </Card>
            </AccordionDetails>
          </Accordion>
        </Paper>

        <Paper elevation={5} variant="outlined" className="m-5">
          <Accordion
            expanded={expanded === "pane4"}
            onChange={handleChange("pane4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Alperen Aydın
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Tekir Köpek
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Paper elevation={3} variant="outlined" className="m-3">
                    <Typography gutterBottom>Dogum Tarihi :</Typography>
                  </Paper>
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
                    <Typography gutterBottom>Uyarı Notu :</Typography>
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

export default PetOwnerList;
