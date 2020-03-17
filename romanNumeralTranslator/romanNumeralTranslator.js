/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  let result = 0;
  let upperCase = romanNumeral.toUpperCase(); 
  for (let i = 0; i < upperCase.length; i++) {
    if (DIGIT_VALUES[upperCase[i]] < DIGIT_VALUES[upperCase[i+1]]) {
      result -= DIGIT_VALUES[upperCase[i]];
      i++;
    }
    result += DIGIT_VALUES[upperCase[i]];
  }

  return result
};
