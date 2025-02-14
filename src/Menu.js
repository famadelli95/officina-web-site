import React from 'react';
import './Menu.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Applicazioni from './pages/Applicazioni'
import Produzione from './pages/Produzione'
import Assemblaggio from './pages/Assemblaggio'
import Collaudo from './pages/Collaudo'
import Contatti from './pages/Contatti'

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');
    const [currentPage, setCurrentPage] = React.useState("Home");
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    return (
        <div id="body">
            <div id="menu">
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton onClick={() => setCurrentPage("Home")} value="home">HOME</ToggleButton>
                    <ToggleButton onClick={() => setCurrentPage("ChiSiamo")} value="chisiamo">CHI SIAMO</ToggleButton>
                    <ToggleButton onClick={() => setCurrentPage("Applicazioni")} value="applicazinoi">APPLICAZIONI</ToggleButton>
                    <ToggleButton onClick={() => setCurrentPage("Produzione")} value="produzione">PRODUZIONE</ToggleButton>
                    <ToggleButton onClick={() => setCurrentPage("Assemblaggio")} value="assemblaggio">ASSEMBLAGGIO</ToggleButton>
                    <ToggleButton onClick={() => setCurrentPage("Collaudo")} value="collaudo">COLLAUDO</ToggleButton>
                    <ToggleButton onClick={() => setCurrentPage("Contatti")} alue="contatti">CONTATTI</ToggleButton>
                </ToggleButtonGroup>
            </div>

            {/* Render the selected page */}
            {currentPage === "Home" && <Home/>}
            {currentPage === "ChiSiamo" && <ChiSiamo />}
            {currentPage === "Applicazioni" && <Applicazioni />}
            {currentPage === "Produzione" && <Produzione />}
            {currentPage === "Assemblaggio" && <Assemblaggio />}
            {currentPage === "Collaudo" && <Collaudo />}
            {currentPage === "Contatti" && <Contatti />}
            
        </div>
    );
  }