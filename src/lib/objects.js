const createPerson = (name, age) => {
  let person = { name, age };
  return person;
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = (people) => {
  return people.map((person) => person.age);
};

const findByName = (name, people) => {
  const searchName = people.filter((person) => person.name === name);
  return searchName[0];
};

const findHondas = (cars) => {
  return cars.filter((hondaCars) => hondaCars.manufacturer === "Honda");
};

const averageAge = (people) => {
  const findAges = people.map((ages) => ages.age);
  const addAges = findAges.reduce((acc, curr) => acc + curr);
  return addAges / findAges.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function (person) {
      return `Hi ${person}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
