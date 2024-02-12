// Rotational Checker 
// *ambigram, strobogrammatic, perfect print * // 
import * as DRM from '../DRIndex.js';

function RotationChecker(num,arr,func) {
   const numArray = num.toString().split('').map(Number);
   const check = numArray.every(num => arr.includes(num));
   const result = [];
   if (check) {
     const div = Math.floor(numArray.length / 2);
     const rdiv = numArray.length - div;
     const left = numArray.slice(0,div);
     const right = numArray.slice(rdiv).reverse()
     for (let i = 0; i < div; i++) {
        result.push(func(left[i],right[i]));
     }
  const final = result.every(value => value);
  if (num.length % 2 !== 0 && func === DRM.PerHelper) {
     if (final && num[div] == 0 || final && num[div] == 8) {
        return true;
     }else {
        return false;
     } 
  } else if(num.length % 2 !== 0 && func === DRM.StrHelper) {
    if (final && num[div] == 0 || final && num[div] == 1 || final && num[div] == 8) {
       return true;
    } else {
      return false;
    }
  } else if (final) {
    return true;
  } else {
     return false
  }
 } else {
   return false;
 }
  
}

export default RotationChecker