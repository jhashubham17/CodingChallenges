/* Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement � */

const mark_Mass = 78;
const mark_Height = 1.69;
const john_Mass = 92;
const john_Height = 1.95;

const BMI_Mark = mark_Mass / mark_Height ** 2;
const BMI_John = john_Mass / (john_Height * john_Height);
console.log(BMI_Mark, BMI_John);

if (BMI_Mark > BMI_John) {
  console.log(
    `Mark BMI (${BMI_Mark}) is Higher than the John BMI (${BMI_John})`
  );
} else {
  console.log(
    `John BMI (${BMI_John}) is Higher than the Mark BMI (${BMI_Mark})`
  );
}
