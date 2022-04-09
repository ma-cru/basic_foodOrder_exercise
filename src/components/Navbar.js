import React from 'react';

import EinkaufswagenFenster from './EinkaufswagenFenster';

import './Navbar_css.css';

const Navbar = (props) => {

    return (
        <div className='navBar'>
            <span className='titleText'>Booster Jooster</span>
            <span></span>
            <EinkaufswagenFenster className="einkaufswagenFenster"/>            
        </div>
    );

}

export default Navbar;