import { getEnsName } from '@wagmi/core';
import { config } from '/wagmi.config.js';

export async function resolveEnsName(address) {
    //  console.log(address);
      try {
          const ensName = await getEnsName(config, {
              address: `${address}`,
          });
          return ensName;
      } catch (error) {
          console.error('Error resolving ENS name:', error);
      }
  }