import resolveEnsAddress from "./ensAddress.js";
import resolveEnsName from "./resAddress.js";

export default function findEnsOwner(input){
    resolveEnsAddress(input)
    .then(hexAddress => {
        if(!hexAddress) {
            console.log('No Address found');
            return null;
        }
        return resolveEnsName(hexAddress).then(resolvedName => {
            if(resolvedName){
                console.log(`name resolves to: ${resolvedName}`);
                return resolvedName;
            } else {
                console.log(`address not resolved, returning hex: ${hexAddress}`);
                return hexAddress;
            }
        });
    })
    .catch(error => {
        console.error('Error while finding resolver',error);
    })
};


