///// task1



const helloButton = document.getElementById('buttonnnnn');

buttonnnnn.addEventListener('click', () => {
    console.log('Hello World!');
});



/// task 2

document.addEventListener('DOMContentLoaded', function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const checkButton = document.getElementById('checkkkButton');
    const resultElement = document.getElementById('result');

    checkButton.addEventListener('click', function () {
        const userGuessInput = document.getElementById('userGuess');
        const userGuess = parseInt(userGuessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultElement.textContent = 'Введіть число від 1 до 100.';
        } else if (userGuess === randomNumber) {
            resultElement.textContent = 'Вітаю.';
        } else {
            resultElement.textContent = `Вибач не вгадав ${randomNumber}. Спробуй ще`;
        }
    });
});



/// task 3


const clickCountElement = document.getElementById('ClickCount');


  let ClikClik = 0;


  document.addEventListener('click', function () {
    
    ClikClik++;

    clickCountElement.textContent = ClikClik;
  });





// task 4
  

const applyCallbackToEachElement = (arr, Callback) => {
  return arr.map(Callback);
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const resultt = applyCallbackToEachElement(arr, squareCallback);
console.log(resultt); 



///task 5


const calculateDiscountedPrice = (price, discount, callback) => {
  const PriceDiscounted = price - (price * discount / 100);
  callback(PriceDiscounted);
};

const showDiscountedPrice = (PriceDiscounted) => {
  console.log(`Discounted price: $${PriceDiscounted}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);