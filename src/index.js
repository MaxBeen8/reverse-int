module.exports = function reverse(n) {
  n = String(n);
  if (n[0] === '-'){
    n = n.slice(1);
  }
  let mas = n.split('');
  let reverseMas = mas.reverse();
  let str = reverseMas.join('');
  let reversNumber = Number(str);
  return reversNumber;
}
