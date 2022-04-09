import React, { Fragment, useContext } from 'react';

import Bestellungsverarbeiter from '../store/BestellungsVerarbeiter';
import CartElementSub from './CartElementSub';

import './CartElement_css.css';

const CartElement = props => {

    const ctx = useContext(Bestellungsverarbeiter);

    if (ctx.bestellung.length > 0) {

        return (
            <Fragment>
                {
                    ctx.bestellung.map(order => <CartElementSub
                        key={order.key}
                        id={order.id}
                        product={order.product}
                        amount={order.amount}
                        price={order.price}
                        times={" * "}
                        equals={" = "}
                        sum={(Number(order.price)) * (Number(order.amount))}
                        incrementer={() => ctx.incrementer(order.id)}
                        decrementer={() => ctx.decrementer(order.id)}
                        remover={() => ctx.remover(order.id)}
                    />)
                }
                <p>Total price = €{ctx.totaler()}</p>
                <div className='buttonContainer'><button className='submissionButtons' onClick={() => { ctx.canceller(); props.modalToggler(); }}>Cancel order</button><button className='submissionButtons' onClick={() => { ctx.confirmer(); props.modalToggler() }}>Submit order</button></div>
            </Fragment>
        );
    } else {

        return (
            <Fragment>
                <CartElementSub
                    nichtsNachricht={"Waiting on an order, currently no products selected."}
                />
            </Fragment>
        );

    }
}

export default CartElement;