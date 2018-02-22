const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newArray = []
  for(let i = 0; i < drivers.length; i++){
    newArray.push(drivers[i]);
  }
  newArray.push(name);
  return newArray;
}

function prependDriver(name){
  let newArray = []
  for(let i = 0; i < drivers.length; i++){
    newArray.push(drivers[i]);
  }
  newArray.unshift(name);
  return newArray;
}

function removeLastDriver(name){
  let newArray = []
  for(let i = 0; i < drivers.length; i++){
    newArray.push(drivers[i]);
  }
  newArray.pop(name);
  return newArray;
}

function removeFirstDriver(name){
  let newArray = []
  for(let i = 0; i < drivers.length; i++){
    newArray.push(drivers[i]);
  }
  newArray.shift(name);
  return newArray;
}
