// Palindrome Checker

const Palindrome = (num) => {
  let reversed = num.toString().split('').reverse().join('');
  return num == Number(reversed);
}

export default Palindrome