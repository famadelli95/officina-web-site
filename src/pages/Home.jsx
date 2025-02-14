import React from "react";
import Slider from "react-slick";
import image1 from '../images/calanca1.jpg'
import image2 from '../images/calanca2.jpg'
import macspe from '../images/macspe.jpg'
import dsc from '../images/DSC_0488.jpg'
import ufficio from '../images/ufficio-5.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardMedia, CardContent, Typography, Grid, Box } from "@mui/material";
import './Home.css'

const images = [
    image1,
    image2
];

const cards = [
    { id: 1, title: "PRODUZIONE", img: dsc, desc: "Il nostro staff e il nostro parco macchine all’avanguardia permettono di gestire efficacemente le richieste dei clienti con massima competenza e duttilità esecutiva." },
    { id: 2, title: "COLLAUDO", img: ufficio, desc: "Effettuiamo scrupolosamente controlli durante l’intero ciclo di lavorazione dei componenti e siamo in grado di rilasciare una certificazione dimensionale completa." },
  ];

export default function AdvancedCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div id="home">
        <Box id="slider">
            <Slider {...settings}>
                {images.map((img, index) => (
                <Box key={index} component="img" src={img} sx={{ width: "100%", borderRadius: "0px" }} />
                ))}
            </Slider>
        </Box>
        <div class="slider-description">
            <div class="container-description">
                <div class="col-md-12">
                    <div class="slider-content">
                        <h2>OFFICINA MECCANICA CALANCA</h2>
                        <p>Lavorazioni meccaniche di precisione</p>
                    </div>
                </div>
            </div>
        </div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3, borderRadius: 2 }}>
                    <CardMedia component="img" height="200" image={card.img} alt={card.title} />
                    <CardContent>
                        <Typography variant="h6">{card.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                        {card.desc}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    </div>
  );
}