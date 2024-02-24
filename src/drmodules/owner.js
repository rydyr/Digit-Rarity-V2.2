import resolveEnsAddress from "./ensAddress.js";
import resolveEnsName from "./resAddress.js";

export default async function findEnsOwner(input){
    try {
        const hexAddress = await resolveEnsAddress(input);
        if(!hexAddress) {
            console.log('No Address found');
            return null;
        }
        const resolvedName = await resolveEnsName(hexAddress);
        if(resolvedName){
            console.log(`name resolves to: ${resolvedName}`);
            return resolvedName;
        } else {
            console.log(`address not resolved, returning hex: ${hexAddress}`);
            return hexAddress;
        }
    } catch (error) {
        console.error(error)
        return null
    }
        
        
   
};


