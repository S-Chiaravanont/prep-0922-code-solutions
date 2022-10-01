function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:' + convertHoursToMinutesResult);

function getGreeting(name) {
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

var getGreetingResult = getGreeting('World');
console.log('getGreeting exercise:' + getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:' + addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:' + multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:' + subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:' + getCircleCircumferenceResult);

function getFullName(first, last) {
  return first + ' ' + last;
}

var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:' + getFullNameResult);

function cube(num) {
  return num * num * num;
}

var cubeResult = cube(5);
console.log('cube exercise:' + cubeResult);
