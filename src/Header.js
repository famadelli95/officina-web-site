import React from 'react';
import logo from './images/calanca_logo_bianco.png'
import './Header.css'; // Import the corresponding CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div class="col-md-4 col-sm-4">
            <div class="logo">
                <a href="http://officinacalanca.it/">
                    <img src={logo} alt="Officina Calanca" />
				</a>
			</div>
        </div>
        <div class="col-md-8 col-sm-8">
            <div class="contact">
                <p>info@officinacalanca.it   -   Tel. 0535 55425</p>       
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
