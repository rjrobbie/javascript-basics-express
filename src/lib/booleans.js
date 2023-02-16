function negate(a) {
  if (a === true) {
    return false;
  }
  return true;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  if (a && b) {
    return false;
  }
  if (a || b) {
    return true;
  }
  if (!a && !b) {
    return false;
  }
}

function truthiness(a) {
  return !!a;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 != 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  return a % 2 == 0;
}

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0;
}

function startsWith(char, string) {
  return string.charAt(0) === char;
}

function containsVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (string.toLowerCase().includes(vowels[i])) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  return string === string.toLowerCase();
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};