import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Grid } from "@mui/material";
import ufficio1 from '../images/ufficio1.jpg'
import ufficio2 from '../images/ufficio2.jpg'
import garage from '../images/garage.jpg'
import Certificazione from'./CertificazioneISO9001.jsx'
import './ChiSiamo.css'

export default function CustomCard() {
  return (
    <div id="chisiamo">
      <Grid 
        container 
        justifyContent="center" 
        alignItems="start" 
        sx={{ minHeight: "100vh", padding: 2 }}
        spacing={2}
      >
        {/* Wrapper to Center Left Column + Right Column Together */}
        <Grid 
          item 
          container 
          xs={12} 
          md={8}  // Centered block (adjust width if needed)
          justifyContent="right" 
          spacing={2} 
          display="flex"
        >
          
          {/* Left Section - About Us Card */}
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 4, borderRadius: 2, overflow: "hidden",maxWidth: "800px" }}>
              <Box sx={{ backgroundColor: "#54bb4a", padding: 2 }}>
                <Typography variant="h5" color="black" align="center">
                  APPLICAZIONI
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                OFFICINA MECCANICA CALANCA produce in fornitura completa componenti di elevata precisione per i seguenti settori dell’industria:

                • Macchine automatiche

                • Macchine agricole

                • Macchine lavorazione legno

                • Biomedicale
                </Typography>
              </CardContent>
              <CardMedia component="img" height="400" image={ufficio1} alt="ufficio" />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  <p>Il nostro obiettivo è sempre stato offrire il massimo servizio al cliente.</p>
                  <p>Siamo dotati di mezzi di trasporto propri così da garantire trasporti rapidi e sicuri.</p>
                  <p>Siamo il partner ideale per le lavorazioni meccaniche di precisione e per l’assemblaggio di gruppi.</p>
                </Typography>
              </CardContent>
              <CardMedia component="img" height="400" image={ufficio2} alt="ufficio" />
              <CardMedia component="img" height="400" sx={{ paddingTop: "20px" }} image={garage} alt="ufficio" />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Inviaci una richiesta di informazioni:
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}> {/* Takes 4 columns on medium+ screens, full width on small screens */}
            <Certificazione />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}