function countBs (str){
  let count = 0;
  let i = "b"
  for ( let n = 0; n < str.length; n++){
    if (str.charAt(n) == i)
    count ++;
    };
  return count;
  }
console.log(countBs("bdddbfggb"))


function countChar(str, simbol) {
  let count = 0;
  for (let n = 0; n < str.length; n++)
    if (string.charAt(n) == simbol)
      count ++;
  return count;
}
console.log(countChar("bdddbfggb", "b"))



