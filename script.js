//your JS code here. If required.
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOddNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(number => number % 2 === 0);
      document.getElementById('output').textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
      resolve(evenNumbers);
    }, 1000);
  });
}

function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(number => number * 2);
      document.getElementById('output').textContent = `Multiplied Numbers: ${multipliedNumbers.join(', ')}`;
      resolve(multipliedNumbers);
    }, 2000);
  });
}

getNumbers()
  .then(numbers => {
    return filterOddNumbers(numbers);
  })
  .then(evenNumbers => {
    return multiplyEvenNumbers(evenNumbers);
  })
  .catch(error => {
    document.getElementById('output').textContent = `Error: ${error}`;
  });
