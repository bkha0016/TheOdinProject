const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  let newString = "";
  for (let i = string.length; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
};

function calculator() {
  // Return an object with the calculator methods
  return {
    add: function (a, b) {
      return a + b;
    },
    substract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    },
  };
}

function caesarCipher(str, shift) {
  // Helper function to shift a character
  const shiftChar = (char, shift) => {
    const isUpperCase = char === char.toUpperCase();
    const charCode = char.toLowerCase().charCodeAt(0);

    if (charCode < 97 || charCode > 122) return char; // Non-alphabetical characters remain unchanged

    let newCharCode = charCode + shift;

    // Handle wrapping from z to a
    if (newCharCode > 122) {
      newCharCode = 97 + (newCharCode - 123);
    } else if (newCharCode < 97) {
      newCharCode = 122 - (96 - newCharCode);
    }

    const shiftedChar = String.fromCharCode(newCharCode);
    return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
  };

  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array of numbers");
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
