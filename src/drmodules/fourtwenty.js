// Includes 420 

function Has420(num) {
  const inNum = num.toString();
  if(inNum.includes('420')) {
    return true;
  }else{
    return false;
  }
}

export default Has420;