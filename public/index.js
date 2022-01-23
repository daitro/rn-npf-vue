/*let num = 112243335566;
num = [...String(num)];
let obj = {};
function numberLucky() {
  for (let i = 0; i < num.length; i++) {
    if (obj[num[i]]) {
      obj[num[i]]++;
    } else {
      obj[num[i]] = 1;
    }
  }
  let result = 0;
  for (let key in obj) {
    if (obj[key] == key) {
      result = Math.max(result, key);
    }
  }
  return result;
}

console.log(numberLucky(num));


let str = "How can mirrors be real if our eyes aren't real";

function upperCaseStr() {
  let arr = str.split(" ");
  let res = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  return res.join(" ");
}

console.log(upperCaseStr(str));


function findNumber(arr) {
  //1. Определяю что мне нужно найти, четное или нечетное число
  //берем 3 элемента массива
  const firstNumIsOdd = arr[0] % 2 === 0;
  const secondNumIsOdd = arr[1] % 2 === 0;
  const thirdtNumIsOdd = arr[2] % 2 === 0;
  // Переменная отвечает "я ищу четное число в массиве?"
  // Если результат сравнения true - то ищем нечетное число, если false - то ищем четное число
  const isFindOddNumber =
    (firstNumIsOdd && secondNumIsOdd) ||
    (firstNumIsOdd && thirdtNumIsOdd) ||
    (secondNumIsOdd && thirdtNumIsOdd);

  // 2. Перебираю массив, через метод find и ищу четное/не четное число (это мы определили в 1ом пункту)

  let res;

  if (isFindOddNumber) {
    res = arr.find((element) => {
      return element % 2 === 1;
    });
  } else {
    res = arr.find((element) => {
      return element % 2 === 0;
    });
  }

  return res;
}

let arr = [2, 4, 0, 100, 17, 4, 8, 2602, 36];
let arr2 = [12, 5, 7, 11, 17];
console.log(findNumber(arr));
console.log(findNumber(arr2));

function descendingOrder(n) {
  let arr = String(n).split("");
  arr.sort((a, b) => b - a);
  return Number(arr.join(""));
}

console.log(descendingOrder(853962));


function high(x) {
  let alfArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let scores = {};
  alfArr.forEach((char, index) => {
    scores[char] = index + 1;
  });
  let wordsArr = x.split(" ");
  let scoresArr = wordsArr.map((word) => {
    let wordScore = 0;
    for (let i = 0; i < word.length; i++) {
      let keyWord = scores[word[i]];
      wordScore = wordScore + keyWord;
    }
    return wordScore;
  });

  let maxScoreWord = Math.max(...scoresArr);
  const maxScoreWordIndex = scoresArr.indexOf(maxScoreWord);
  return wordsArr[maxScoreWordIndex];
}

console.log(high("man i need a taxi up to ubud"));

// x = 'man i need a taxi up to ubud'
// Нужно x строку сделать массивом ['man', 'i', 'need', 'a', 'taxi', 'up', 'to', 'ubud']
// Нужно создать еще один массив, который будет состоять из значений слов man = m:13 + a:1 + n:14 = 28, i = i:9 = 9 [28, 9, ...];
// Завести переменную, которая будет в себе содержать самое большое число из массива чисел
// Найти индекс самого большого числа в массиве чисел
// Индекс самого большого числа совпадает с индексом необходимого нам слова
// По индексу найти слово в массиве слов и вернуть слово

function sequenceSum(begin, end, step) {
  let sum = begin;
  let integer = begin;
  if (begin > end) return 0;

  for (integer; integer + step <= end; integer += step) {
    sum = sum + integer + step;
  }
  return sum;
}

console.log(sequenceSum(1, 5, 1));


function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (array.length === 0 || sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0, -1, -3]));


function solve(s) {
  let character = "";
  let uppercase = 0;
  let lowecase = 0;

  for (let i = 0; i < s.length; i++) {
    character = s[i];
    if (character === character.toLowerCase()) {
      lowecase++;
    } else {
      uppercase++;
    }
  }

  if (lowecase > uppercase || lowecase === uppercase) {
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }
}

console.log(solve("CODe"));


let add = (a, b) => {
  if (b !== undefined) return a + b;
  return (c) => a + c;
};

console.log(add(2, 5));
console.log(add(2)(5));
*/

function nbDig(n, d) {
  let arrOfNumberSquared = [];
  for (let k = 0; k <= n; k++) {
    let num = k * k;
    arrOfNumberSquared.push(num);
  }

  let arrResultingNumbers = arrOfNumberSquared.filter((item) => {
    if (String(item).includes(String(d))) {
      return item;
    }
  });

  let res = [];
  if (d === 0) {
    res.push(0);
  }

  let stringResult = arrResultingNumbers.join("");
  for (let char of stringResult) {
    if (char == d) {
      res.push(char);
    }
  }

  return res.length;
}

console.log(nbDig(11011, 2));
