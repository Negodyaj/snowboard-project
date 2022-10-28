// cat

const firstCat = {
  name: 'Jerry',
  age: 6,
  owner: 'John Doe',
  breed: 'Unknown'
};

// firstCat.name >> 'Jerry'
// firstCat.breed >> 'Unknown'

const secondCat = {
  name: 'Perry',
  age: 3,
  owner: {
    name: 'John Doe',
    age: 20,
    address: 'some city'
  },
  breed: 'Britain'
};

const thirdCat = secondCat;

trickyPrintCatObject(secondCat);

console.log(`IT'S TIME FOR EXPERIMENTS!!!!!!!!!!!))))`);
console.log(secondCat.name === thirdCat.name); // true
console.log(secondCat.age === thirdCat.age); // true
console.log(secondCat.owner === thirdCat.owner); // true
console.log(secondCat.breed === thirdCat.breed); // true
console.log(secondCat === thirdCat); // false

// printCatObject(firstCat);
// printCatObject(secondCat);

function trickyPrintCatObject(cat) {
  //cat.owner = 'Antoshka';
  console.log(`Name: ${cat.name}; Age: ${cat.age}; Owner: ${cat.owner}; Breed: ${cat.breed}`);
}

function deepEqual(obj1, obj2); // => true

const obj1 = {
  name: 'Perry',
  age: 3,
  owner: {
    name: 'John Doe',
    age: 20,
    address: 'some city'
  },
  breed: 'Britain'
};

const obj2 = {
  name: 'Perry',
  age: 3,
  owner: {
    name: 'John Doe',
    address: 'some city'
  },
  breed: 'Britain'
};