import React from "react";
import Slider from "react-slick";
import image1 from '../images/calanca1.jpg'
import image2 from '../images/calanca2.jpg'
import macspe from '../images/macspe.jpg'
import dsc from '../images/DSC_0488.jpg'
import ufficio from '../images/ufficio-5.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import './Home.css'

const images = [
    image1,
    image2
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
        <div class="feature-box-wrapper">
            <div class="container">
                <div class="col-md-4">
                    <div class="feature">
                        <div>
                            <img src={macspe}/>
                        </div>

                        <h2>MECSPE 2015</h2>
                        
                        <p>MECSPE è la fiera di riferimento per l’industria manifatturiera. Saremo presenti dal 26 al 28 Marzo al padiglione 5 - stand F47</p> 
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature">
                        <div>
                            <img src={dsc}/>
                        </div>
        
                        <h2>PRODUZIONE</h2>

                        <p>Il nostro staff e il nostro parco macchine all’avanguardia permettono di gestire efficacemente le richieste dei clienti con massima competenza e duttilità esecutiva.</p> 
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="feature">
                        <div>
                            <img src={ufficio}/>      
                        </div>
                        <h2>COLLAUDO</h2>
                        <p>Effettuiamo scrupolosamente controlli durante l’intero ciclo di lavorazione dei componenti e siamo in grado di rilasciare una certificazione dimensionale completa.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}