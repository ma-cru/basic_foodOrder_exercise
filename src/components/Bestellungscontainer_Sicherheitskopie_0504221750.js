import React, { Fragment/*, useState*/, useContext, useEffect, useReducer } from 'react';
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


    // const [bestellung, setBestellung] = useState([]);

    const [bestellung, setBestellung] = useReducer((state, action) => {
        switch (action.type) {
            case 'update':
                console.log(state);
                return (state = action.array);
            default:
                return state;
        }
    }, []);

    console.log(bestellung);

    const ctx = useContext(Bestellungsverarbeiter);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("in submitHandler");
        console.log(event.target.elements);

        const newBestellung = {
            key: Math.floor(Math.random() * 100000),
            id: event.target.elements[0].id,
            product: event.target.elements[0].name,
            amount: event.target.elements[0].value,
            price: event.target.elements[1].value
        };

        console.log(newBestellung);

        console.log(newBestellung.amount);

        console.log(bestellung);

        // console.log(prevBestellungen);

        // console.log(JSON.parse(localStorage.getItem("contBestellung")));

        // const contBestellung = JSON.parse(localStorage.getItem("contBestellung"));

        let newArr = [];

        let singlesArr = [];

        let doublesArr = [];

        let bestellungenArr = [...bestellung];

        console.log(bestellungenArr);

        if (bestellungenArr.length > 0) {

            console.log("in setBestellung if");

            console.log(newBestellung);

            bestellungenArr.map((product) => {

                console.log(product);

                console.log(newBestellung);

                if (product.id === newBestellung.id) {

                    console.log("in setBestellung map if");

                    doublesArr.push(product);



                } else {

                    console.log("in setBestellung map else");

                    singlesArr.push(product);

                    console.log(singlesArr);

                }

                // productAmount = Number(product.amount);

                // console.log(product.amount);

                // newBestellung.amount = ((Number(newBestellung.amount)) + (Number(productAmount)));


                console.log([singlesArr], [doublesArr]);

                return newArr = [[singlesArr], [doublesArr]];
            });

            console.log(doublesArr);
            console.log(singlesArr);
            console.log(newBestellung);

            if (doublesArr.length > 0) {

                console.log(doublesArr[0].amount);

                console.log(newBestellung.amount);

                let amount = (Number(doublesArr[0].amount)) + (Number(newBestellung.amount));

                // let falseAmount = doublesArr[0].amount + newBestellung.amount;

                // console.log(falseAmount);

                // console.log(falseAmount.slice(0, 1));

                // console.log((falseAmount.slice(1, 2)));

                // let correctAmount = String(Number(falseAmount.slice(0, 1)) + (Number(falseAmount.slice(1, 2))));

                // console.log(correctAmount);

                // newBestellung.amount = correctAmount

                const correctedBestellung = {
                    key: Math.floor(Math.random() * 100000),
                    id: event.target.elements[0].id,
                    product: event.target.elements[0].name,
                    amount: amount,
                    price: event.target.elements[1].value
                };

                newArr = [...singlesArr, correctedBestellung];

                console.log(newArr);

            } else {

                newArr = [...singlesArr, newBestellung];

                console.log(newArr);
            }


        } else {

            console.log("in setBestellung else");

            // console.log(newBestellung);

            // newBestellung.amount = newAmount;

            console.log(newBestellung);

            newArr = [newBestellung];

        }

        console.log(newArr);

        // localStorage.setItem('contBestellung', JSON.stringify(newArr));

        // ctx.bestellungFrmCont(newArr);

        setBestellung({
            type: 'update',
            array: [...newArr]
        });

        return newArr;



    }

    // Funktioniert grad nicht richtig, irgendwie fügt es immer ein zusätzliche Zahl hin, wenn man dasselbe Produkt noch einmal hinzufügt
    useEffect(() => {

        ctx.bestellungFrmCont(bestellung);

    }, [bestellung, ctx]);




    //         localStorage.setItem('contBestellung', JSON.stringify(newArr));



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
                            submitHandler={submitHandler}
                        /*valueTallier={valueTallier}*/
                        />)
                    }
                </div>
            </div>

        </Fragment>
    );

}

export default Bestellungscontainer;
