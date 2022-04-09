import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import CartElement from '../components/CartElement';

import './Einkaufswagen_css.css';

const ModalOverlay = props => {

    return (
        <Fragment>
            <div id="modalMsg" className={`modal ${props.classesProp}`}>
                <div className="modalContent" /*style={{height: props.responsiveHeight}}*/>
                    <div className="modalBanner"><span className="close" onClick={props.modalToggler}>&times;</span><br /><span className='buttonTitle'>Wilkommen im Einkaufswagen</span></div>
                    <div className="listeContainer">
                        <p>Please finalise and submit your order.</p>
                        <CartElement
                            modalToggler={props.modalToggler}
                            /*clearOrder={props.clearOrder}*/
                            /*amountTotalerTrigger={props.amountTotalerTrigger}*/
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

const Einkaufswagen = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay
                    /*responsiveHeight={props.responsiveHeight}*/
                    classesProp={props.classesProp}
                    modalToggler={props.modalToggler}
                    modalMsg={props.modalMsg}
                    /*clearOrder={props.clearOrder}*/
                    /*amountTotalerTrigger={props.amountTotalerTrigger}*/
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>

    );
}

export default Einkaufswagen;
