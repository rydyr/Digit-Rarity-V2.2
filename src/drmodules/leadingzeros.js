
function LeadingZeros(n) {
  let zeros = 0;
  let nStr = n.toString();
  for (let i = 0; i < nStr.length; i++) {
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

export default LeadingZeros;