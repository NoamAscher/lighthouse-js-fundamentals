function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    if (multOfX(multiples[0], i) && multOfX(multiples[1], i)) {
    console.log(words[0] + words[1]);
    } else if (multOfX(multiples[0], i)) {
    console.log(words[0]);
    } else if (multOfX(multiples[1], i)) {
    console.log(words[1]);
    } else {
    console.log(i);
    }
  }
}

function multOfX(x, num) {
  return (num % x === 0);
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
