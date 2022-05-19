import React from "react";

//Style
import "./style.css";

let Card = ({height, children}) => {
    return (
        <div
            class="card-pnl card-pnl--fcs"
            style={{height}}
        >
            {children}
        </div>
    );
};

export default Card;
