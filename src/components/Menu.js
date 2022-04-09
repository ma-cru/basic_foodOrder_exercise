import React from "react";

const Menu = props => {


    return (
        <React.Fragment>
            <form className="listSection" onSubmit={props.submitHandler}>
                <span>❖</span>
                <label><strong>{props.product}</strong><br />{props.description}<br /><em>€{props.price}</em></label>
                <input id={props.id} name={props.product} defaultValue="0" className="sectionInputs" type="number" min="0" onBlur={props.valueTallier}></input> <button className="sectionButtons" value={props.price} type="submit">Order</button>
            </form>
            <hr />
        </React.Fragment>
    );

}

export default Menu;
