import React from "react";
import './owner.css';

const OwnerIs = ({owner}) => {
    if(!owner) return null;
    return (
        <div className="ownerInfo">
            Owner: {owner}
        </div>
    )
}

export default OwnerIs;