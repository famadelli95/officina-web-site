import React from 'react';
import './Menu.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  
    return (
        <div id="menu">
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="home">HOME</ToggleButton>
                <ToggleButton value="chisiamo">CHI SIAMO</ToggleButton>
                <ToggleButton value="applicazinoi">APPLICAZIONI</ToggleButton>
                <ToggleButton value="produzione">PRODUZIONE</ToggleButton>
                <ToggleButton value="assemblaggio">ASSEMBLAGGIO</ToggleButton>
                <ToggleButton value="collaudo">COLLAUDO</ToggleButton>
                <ToggleButton value="contatti">CONTATTI</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
  }