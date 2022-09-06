const sortStrings = (arr = []) => new Promise((resolve, reject) => {
  let newArr;
  let arrayOrNot;
  try {
    arrayOrNot = arr.every((item) => typeof item === 'string');
  } catch (e) {
   throw Error('Error: Something went wrong with sorting words!');
  }
  if (arrayOrNot) {
    newArr = arr.sort((a, b) => a.localeCompare(b));
    resolve(newArr);
  } else {
    reject(new Error('Error: Not all items in the array are strings!'));
  }
});

export default sortStrings;
