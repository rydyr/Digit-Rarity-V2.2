import React from "react";
import './owner.css';


export default function OwnerIs({owner}){
    if(!owner) return null;
    return (
        <div className="ownerInfo">
            Owner: {owner}
        </div>
    )
}

