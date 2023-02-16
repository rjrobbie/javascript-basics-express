const getNthElement = (index, array) => {
  if (index >= array.length) {
    return array[index - array.length];
  }
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.join(",");
};

const csvStringToArray = (string) => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newVar = [];
  array.forEach((element) => {
    newVar.push(element);
  });
  newVar.push(element);
  return newVar;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  const newString = [];
  numbers.forEach((number) => {
    newString.push(number.toString());
  });

  return newString;
};

const uppercaseWordsInArray = (strings) => {
  const upperCaseString = [];
  strings.forEach((strings) => {
    upperCaseString.push(strings.toUpperCase());
  });

  return upperCaseString;
};

const reverseWordsInArray = (strings) => {
  return strings.map((string) => string.split("").reverse().join(""));
};

const onlyEven = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const result = array.slice();
  result.splice(index, 1);
  return result;
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter((string) => {
    return string.match(/^[aeiou]/gi);
  });
};

const removeSpaces = (string) => {
  return string.replace(/\s+/g, "");
};

const sumNumbers = (numbers) => {
  const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  return sum;
};

const sortByLastLetter = (strings) => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};