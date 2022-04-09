# basic_foodOrder_exercise
Basic food order exercise. Based on the requirements set out in Schwarzmüller's Complete Guide to React, but conceptualised and implemented alone.

This project exercise aimed to consolidate skills acquired in the previous course units (in particular the use of useReducer) to implement a simple food order page, in which multiple components need to communicate with each other and the state management needs to be conceptualised in such a way as to ensure that the correct state versions are circulated/made use of.

In the app, the amount of a product desired is determined via input and the order then submitted. Upon submit, the array containing the current order is and the number of items displayed on the shopping trolley button are updated. The input value is also reset at this point. If a product is already present in the order array, then its amount is increased by the new amount ordered.

When the user clicks on the shopping trolley button, then a modal window opens in which they get to see an overview of the current state of their order, with the products selected, the amount of these products, the subtotal prices per product and the total order price. Within the shopping trolley it is also possible to increment or decrement the amount of any selected product as well as to completely remove this product. There are three options for closing the shopping trolley: the cross in the top-right corner, a cancel button and a submit order button. If the cross is selected, the modal window closes, but the order status remains as before. If cancel is clicked, then the order status is reset and the order array is cleared. If submit order is selected, then an alert opens confirming the order and presenting the customer with an order reference number.

---

Implements:

- props.children
- useState
- createContext / useContext
- parent > chíld & child > parent communication
- app-wide communication via a Context API provider element
- modal visibility toggling
- fully responsive layout implementation
- higher order functions
- createPortal
