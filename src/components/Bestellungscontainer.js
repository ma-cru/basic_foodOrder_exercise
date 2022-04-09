import React, { Fragment, useContext } from 'react';
import Bestellungsverarbeiter from '../store/BestellungsVerarbeiter';
import Menu from './Menu';

import './Bestellungscontainer_css.css';

const productList = [

    { id: "walnutChips", product: "Crispy, walnut oil chips", description: "As good as they sound!", price: "4.99" },

    { id: "localSalad", product: "Seasonal, locally-sourced salad", description: "With a range of delicious dressings.", price: "6.13" },

    { id: "balkanBurger", product: "Balkan Burger", description: "A taste of the almost orient.", price: "15.42" },

    { id: "saitanWrap", product: "Saitan wrap", description: "With spicy chili sauce!", price: "12.22" },

    { id: "chocBrownie", product: "Vegan double choc brownie", description: "In a luxurious brandy sauce.", price: "5.25" },

    { id: "kofola", product: "Kofola", description: "The authentic taste of Prague", price: "2.99" }

];

const Bestellungscontainer = (props) => {

    const ctx = useContext(Bestellungsverarbeiter);

    return (
        <Fragment>
            <div className='bestellungsContainer'>
                <div className='holdAllElements'>
                    <div className="headerSection">
                        <span></span>
                        <span>Item</span>
                        <span>Order</span>
                    </div>
                    <hr />
                    {
                        productList.map(product => <Menu
                            key={Math.floor(Math.random() * 100000)}
                            id={product.id}
                            product={product.product}
                            description={product.description}
                            amount={product.amount}
                            price={product.price}
                            submitHandler={ctx.submitHandler}
                        />)
                    }
                </div>
            </div>

        </Fragment>
    );

}

export default Bestellungscontainer;
