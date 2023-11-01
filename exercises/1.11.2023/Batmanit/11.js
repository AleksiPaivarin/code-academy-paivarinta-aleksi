
// Omit output (true => slow, false => fast calculation)
const OUTPUT = false;
// lotto number can be between 1 - 40
const MAX_NUMBER = 40;
const MIN_NUMBER = 1;
// Lotto uses 7 unique numbers
const LOTTO_NUMBER_VALUE = 7;
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * Taken from:
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Reads user input, must be seven (7) unique numbers
// between MIN - MAX. Otherwise throws error.
const getUserLotto = () => {
  let userInput = process.argv.splice(2);
  // Must give 7 values
  if (userInput.length != LOTTO_NUMBER_VALUE)
    throw new Error(`Give ${LOTTO_NUMBER_VALUE} values`);
  // Type cast from string to number
  // The array will have NaN if it cannot cast the value
  let userInputInteger = userInput.map((value) => Number(value));
  // Let's check that if NaN is found
  if (!userInputInteger.every((num) => !isNaN(num)))
    throw new Error("Give numbers");
  // Let's check that the numbers are between MIN - MAX
  if (!userInputInteger.every((num) => num >= MIN_NUMBER && num <= MAX_NUMBER))
    throw new Error(`Give numbers between ${MIN_NUMBER} - ${MAX_NUMBER}`);
  // Let's check if the numbers are unique
  if (userInputInteger.length !== new Set(userInputInteger).size)
    throw new Error("please give uniques numbers");
  return userInputInteger.sort((a, b) => a - b);
};

// Returns how many same numbers are found in
// given arrays
const count = (array1, array2) => {
  let howMany = 0;
  for (let n1 of array1) {
    if (array2.includes(n1)) {
      howMany++;
    }
  }
  return howMany;
};

// Returns array containing seven (7) unique random
// values between MIN - MAX
const generateLotto = () => {
  // set can contain only unique values
  let lottoNumbers = new Set();
  while (lottoNumbers.size < LOTTO_NUMBER_VALUE) {
    lottoNumbers.add(getRandomInt(MIN_NUMBER, MAX_NUMBER));
  }
  // return set as an array and sort it
  return Array.from(lottoNumbers).sort((a, b) => a - b);
};

// Returns the given array with leading 0 and in string
const transformToString = (myarray) =>
  myarray.map((num) => (num < 10 ? `0${num}` : `${num}`)).join(" ");

const main = () => {
  // high score
  let highscore = 0;
  // user given lotto
  let userLotto = null;
  // how many was correct
  let howManyWon = 0;
  // how many week it took
  let weeks = 0;
  // the number of jackpot (how many must be won)
  const MAX = 7;
  // get user input, if it fails, end the app
  try {
    userLotto = getUserLotto();
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
  // continue until jackpot
  while (howManyWon < MAX) {
    // generate randomLotto
    let randomLotto = generateLotto();
    if (OUTPUT) {
      console.log("random: " + transformToString(randomLotto));
      console.log("user:   " + transformToString(userLotto));
    }
    // check how many of the numbers were the same
    howManyWon = count(randomLotto, userLotto);
    // console.log("correct: " + howManyWon);
    if (howManyWon > highscore) {
      highscore = howManyWon;
      console.log(`You got ${highscore}`);
    }
    weeks++;
  }
  console.log(`It took ${Math.round(weeks / 52)} years`);
};
main();