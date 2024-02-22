import { getEnsAddress } from '@wagmi/core';
import { config } from '/wagmi.config.js';


export default async function resolveEnsAddress(input) {
    try {
        const ensAddress = await getEnsAddress(config, {
            name: `${input}.eth`,
        });
        return ensAddress;
    } catch (error) {
        console.error('Error resolving ENS address:', error);
    }
}

