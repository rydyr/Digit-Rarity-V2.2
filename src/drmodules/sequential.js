// Sequential Checker

function Sequential(num,move) {
  const add = (num) => num + 1;
  const sub = (num) => num - 1;
  const func = move === "asc" ? add : sub;

  if (num.startsWith('0')) {
     if (!num.startsWith('012')) {
        return false
     } 
  }
  
  const numArray = num.split('').map(Number);
  
  for (let i = 1; i < numArray.length; i++) {
     if (numArray[i] !== func(numArray[i - 1])) {
        return false
     };
  } 
  return true;
}

export default Sequential 
