"use strict";

module.exports = isValidObjectID;

// Array with allowed hexadecimal values
const hexadecimalValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

// Set with hexadecimal values (Set is an ES6 new Feature)
const hexValuesSet = new Set(hexadecimalValues);

/**
 * Function to check if a String has MongoDB's ObjectID format
 * @param {[string]} objectID string to be checked
 * @returns {[boolean]}
 */
function isValidObjectID(objectID) {
  if (!objectID || typeof objectID !== "string" || objectID.length !== 24) {
    return false;
  } else {
    for (let char of objectID) {
      if (!hexValuesSet.has(char)) return false;
    }
    return true;
  }
}
