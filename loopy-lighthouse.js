// var multOf3 = function(num) {
//   return (num % 3 === 0);
// }

// var multOf4 = function(num) {
//   return (num % 4 === 0);
// }


for (var i = 100; i <= 200; i++) {
  if (multOf3(i) && multOf4(i)) {
    console.log("LoopyLighthouse");
  } else if (multOf3(i)) {
    console.log("Loopy");
  } else if (multOf4(i)) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}

function multOf3(num) {
  return (num % 3 === 0);
}

function multOf4(num) {
  return (num % 4 === 0);
}