import React from "react";
import './owner.css';

export default function Owner(props) {
    const style = {
        display: props.active ? 'block' : 'none'
    }
    return(
        <div className="ownerArea" style={style} >
            Owner: {props.owner}
        </div>
    )
}