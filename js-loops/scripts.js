function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while ( counter < 100 ) {
  var randNum = randomNumber(7);
  document.write(randNum + ' ');
  counter += 1;
}