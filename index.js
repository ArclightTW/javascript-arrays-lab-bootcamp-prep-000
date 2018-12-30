var kittens = [ "Milo", "Otis", "Garfield" ] //define your array here

// Add your functions and code here
function appendKitten(name) {
  var k = kittens;
  k.push(name);
  return k;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}