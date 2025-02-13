import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Grid } from "@mui/material";
import ufficio1 from '../images/ufficio1.jpg'
import ufficio2 from '../images/ufficio2.jpg'
import garage from '../images/garage.jpg'
import './ChiSiamo.css'

export default function CustomCard() {
  return (
    <div id="chisiamo">
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "100vh" }}>
        <Card sx={{ maxWidth: 800, marginTop:"20px", marginBottom:"20px", boxShadow: 4, borderRadius: 2, overflow: "hidden" }}>

          <Box sx={{ backgroundColor: "#54bb4a", padding: 2 }}>
            <Typography variant="h5" color="black" align="center">
              CHI SIAMO
            </Typography>
          </Box>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              OFFICINA MECCANICA CALANCA è nata nel 1970 e si è sempre contraddistinta per la sua affidabilità, flessibilità e puntualità.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="400"
            image={ufficio1}
            alt="ufficio"
          />

          <CardContent>
            <Typography variant="body1" color="text.secondary">
              <p>Il nostro obiettivo è sempre stato offrire il massimo servizio al cliente.</p>

              <p>Siamo dotati di mezzi di trasporto propri così da garantire trasporti rapidi e sicuri.</p>

              <p>Siamo il partner ideale per le lavorazioni meccaniche di precisione e per l’assemblaggio di gruppi.</p>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="400"
            image={ufficio2}
            alt="ufficio"
          />
          <CardMedia
            component="img"
            height="400"
            sx={{paddingTop: "20px"}}
            image={garage}
            alt="ufficio"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Inviaci una richiesta di informazioni:
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}