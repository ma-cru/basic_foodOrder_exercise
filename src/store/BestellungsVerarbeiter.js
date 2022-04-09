import React, { createContext, useReducer } from 'react';

const Bestellungsverarbeiter = createContext({

});


export const BestellungsVerarbeiterProvider = (props) => {

    const [bestellung, setBestellung] = useReducer((state, action) => {
        switch (action.type) {
            case 'update':
                console.log(state);
                return (state = action.array);
            case 'incrementer':
                console.log(state);
                return (state = action.array);
            case 'decrementer':
                console.log(state);
                return (state = action.array);
            case 'resetter':
                console.log(state);
                return (state = state.splice(0, state.length));
            case 'remover':
                console.log(state);
                return (state = action.array);
            default:
                return state;
        }
    }, []);

    console.log(bestellung);

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

                const correctedBestellung = {
                    ...newBestellung,
                    amount: amount,
                };

                newArr = [...singlesArr, correctedBestellung];

                console.log(newArr);

            } else {

                newArr = [...singlesArr, newBestellung];

                console.log(newArr);
            }


        } else {

            console.log("in setBestellung else");

            console.log(newBestellung);

            newArr = [newBestellung];

        }

        console.log(newArr);

        setBestellung({
            type: 'update',
            array: [...newArr]
        });

        return newArr;

    }

    const incrementer = (id) => {

        console.log(bestellung);

        let newOrder = bestellung.filter((item) => {
            if (item.id === id) {
                item.amount = (Number(item.amount)) + 1;
                item.amount.toFixed(2);
            }
            return bestellung;
        });

        setBestellung({
            type: 'incrementer',
            array: [...newOrder]
        });

    }

    const decrementer = (id) => {

        let newOrder = bestellung.filter((item) => {
            if (item.id === id) {
                item.amount = (Number(item.amount)) - 1;
                item.amount.toFixed(2);
            }
            return bestellung;
        });

        setBestellung({
            type: 'decrementer',
            array: [...newOrder]
        });

    }

    const totaler = () => {

        let pricingArray = [];

        bestellung.filter((item) => {
            let itemPrice = (Number(item.amount)) * (Number(item.price))
            pricingArray.push(itemPrice);
            return pricingArray;
        });

        let total = pricingArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        return total.toFixed(2);
    }

    const remover = (id) => {

        let newArray = [];

        bestellung.filter((item) => {
            if (item.id !== id) {
                newArray.push(item);
            }
            return newArray;
        });

        setBestellung({
            type: 'remover',
            array: [...newArray]
        });

        return newArray;
    }

    const confirmer = () => {

        setBestellung({
            type: 'resetter',
            array: []
        });

        alert(`Thank for your order. Your purchase reference number is ${Math.floor(Math.random() * 100000)}`);
    }

    const canceller = () => {

        setBestellung({
            type: 'resetter',
            array: []
        });

    }

    const amountTotaler = () => {

        let total;

        if (bestellung.length > 0) {

            let numOrdersArray = [];

            bestellung.filter((item) => {
                let orderAmount = (Number(item.amount));
                numOrdersArray.push(orderAmount);
                return numOrdersArray;
            });

            total = numOrdersArray.reduce((accumulator, currentValue) => {

                console.log(accumulator);
                console.log(currentValue);
                return accumulator + currentValue;
            }, 0);

        } else {

            total = 0;

        }

        return total;
    }

    return (
        <Bestellungsverarbeiter.Provider value={{
            submitHandler: submitHandler,
            incrementer: incrementer,
            decrementer: decrementer,
            totaler: totaler,
            canceller: canceller,
            confirmer: confirmer,
            remover: remover,
            bestellung: bestellung,
            amountTotaler: amountTotaler
        }}>
            {props.children}
        </Bestellungsverarbeiter.Provider>
    )

}


export default Bestellungsverarbeiter;