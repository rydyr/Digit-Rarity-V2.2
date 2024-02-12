
function TrailingZeros(n) {
  let zeros = 0;
  let nStr = n.toString();
  for (let i = nStr.length - 1; i > 0; i--) {
    if (nStr[i] === '0') {
      zeros++;
    } else {
      break;
    }
  }
  if (zeros) {
     return zeros;
  } else {
     return false;
  }
};

export default TrailingZeros;