import React from 'react';
import './CartElementSub_css.css';

const CardElementSub = (props) => {

    return (
        <React.Fragment>
            <div id={props.id} className='infoSections'><p>{props.nichtsNachricht}{props.product}{props.times}{props.amount}{props.equals}{props.sum}</p><span><button onClick={props.decrementer}>-1</button> <button onClick={props.incrementer}>+1</button> <button onClick={props.remover}>remove item</button></span></div>
            <hr />
        </React.Fragment>
    )
}
export default CardElementSub;