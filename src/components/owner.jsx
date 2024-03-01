import React from "react";
import './owner.css';

export default function Owner(props) {
    const style = {
        display: props.active ? 'block' : 'none'
    }
    const ensName = `https://vision.io/name/${props.name}`;

    return(
        <div className="ownerArea" style={style} >
            <p id="ownerTag">Owner: {props.owner}</p>
            <a href={ensName} target="_blank" rel="noopener noreferrer" id="vLink">
                <span className="colorBlack">~ </span>
                <span className="colorYellow">Vision</span>
                <span className="colorBlack">.</span>
                <span className="colorYellow">io</span>
                <span className="colorBlack"> ~</span> 
            </a>
        </div>
    )
}