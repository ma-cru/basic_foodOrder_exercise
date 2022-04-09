import React, { Fragment, useState, useContext } from 'react';

import Einkaufswagen from '../overlays/Einkaufswagen';
import Bestellungsverarbeiter from '../store/BestellungsVerarbeiter';

import './EinkaufswagenFenster_css.css';

const EinkaufswagenFenster = (props) => {

    const ctx = useContext(Bestellungsverarbeiter)

    const [initModalVis, setModalVis] = useState('hidden');

    const toggleAndLoad = () => {

        initModalVis === 'hidden'
            ? setModalVis('shown')
            : setModalVis('hidden')

    }

    return (
        <Fragment>
            <div className='windowHolder'>
                <div className='einkaufsWagenFenster' onClick={toggleAndLoad}>
                    <span><img className="trolleyImg" alt="shopping trolley icon" src="./images/white-24dp/1x/outline_shopping_cart_white_24dp.png"></img><span className='orderText'>{ctx.amountTotaler()} item/s</span></span>
                </div>
                <div className={initModalVis}>
                    <Einkaufswagen
                        /* responsiveHeight={responsiveHeight}*/
                        modalToggler={toggleAndLoad}
                        classesProp={initModalVis}
                        /*clearOrder={clearOrder}*/
                    /*amountTotalerTrigger={amountTotalerTrigger}*/
                    /*orderConcluder={orderConcluder}*/
                    /*orderObject={ctx.constBestellung}*/
                    />
                </div>
            </div>
        </Fragment>
    );

}

export default EinkaufswagenFenster;