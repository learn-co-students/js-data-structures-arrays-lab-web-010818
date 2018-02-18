// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver){
  drivers.push(driver);
}

function destructivelyPrependDriver(driver){
  drivers.unshift(driver);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  const nArray = [...drivers.slice(0,3), name];
  return nArray;
}

function prependDriver(name){
  const nArray = [name, ...drivers.slice(0,3)]
  return nArray;
}

function removeLastDriver(){
  const nArray = drivers.slice(0,2);
  return nArray;
}

function removeFirstDriver(){
  const nArray = drivers.slice(1,3);
  return nArray;
}
