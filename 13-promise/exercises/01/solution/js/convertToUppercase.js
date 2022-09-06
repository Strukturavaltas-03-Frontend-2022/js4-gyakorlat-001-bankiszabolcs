const convertToUppercase = (arr = []) => new Promise((resolve, reject) => {
  let newArr;
  if (arr.every((item) => typeof item === 'string')) {
    newArr = arr.map((item) => item.toUpperCase());
    resolve(newArr);
  } else { reject(new Error('Error: Not all items in the array are strings!')); }
});
export default convertToUppercase;
