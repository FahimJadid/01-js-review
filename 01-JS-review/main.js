/* 
1. Carousel
Write a program that launches a carousel for 10 turns,
showing the  turn number each time */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* 
When it's done, improve it so that number of turns
is given by the user
*/

const input = Number(prompt(`How many turns do you want? : `));
for (let i = 1; i <= input; i++) {
  console.log(i);
}

// const input = prompt(`How many turns do you want? : `);
// for (let i = 1; i <= input; i++) {
//   console.log(+i);
// }

/*
2. Parity
Check the following program that shows even numbers
(divisible by 2) between 1 & 10
*/

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

/*
 Improve it again to replace the initial number 1 by a
 number given by the user
*/

const initial = prompt('Input your integar: ', 1);

for (let i = +initial; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

/*
3. Input Validation
write a program that continues to ask the user for a number
until the entered number is less than or equal to 100
*/

let guess = 101;
while (guess >= 100) {
  guess = prompt('Enter an integer: ', 200);
}

/*
when you are done with the above, improve the progress so
that the terminating number is between 50 & 100
*/

let guess = 101;

while (guess > 100 || guess < 50) {
  guess = prompt('Enter an integer: ', 200);
}

/*
4. Multiplication Table
Write a program that asks the user for a nubmer, than shows
the multiplication table for this number
*/

let num = prompt('What number do you want? : ', 0);
for (i = 1; i <= 10; i++) {
  let result = num * i;
  console.log(`${num} * ${i} = ${result}`);
}

/*
when you are done improve the program so it only
accepts numbers between 2 and 9 (use the previous exercise as a blueprint)
*/

let userData = 0;

while (userData > 9 || userData < 2) {
  userData = prompt('Enter an integer: ', 0);
}
for (i = 1; i <= 10; i++) {
  let result = userData * i;
  console.log(`${userData} * ${i} = ${result}`);
}

/*
Write a program that plays "neither yes, nor no" with the
user. Specifically, the programs asks the user to enter text 
until either "yes" or "no" is typed, which ends the game.

*/

let user = 'yes';

while (user !== 'yes' && user !== 'no') {
  user = prompt('Enter yes or no to stop: ');
}

/*
write a program that shows all numbers between 1 and 100
with the following exceptions: It shows 'Fizz' instead if 
the number is divisible by 3. It shows 'Buzz' instead if the number 
is divisible by 5 and not by 3

*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`${i} is Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} is Buzz`);
  } else {
    console.log(`${i}`);
  }
}

/* 
When it's done, improve it so that the program
shows "FizzBuzz" instead for numbers divisible both
by 3 & by 5 
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(`${i} is FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} is Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} is Buzz`);
  } else {
    console.log(`${i}`);
  }
}

/*
Shortening conditional statements 
*/

let word = 'moon';
word == 'moon'
  ? console.log('Hi, moon')
  : console.log('How is it going, moon?');
