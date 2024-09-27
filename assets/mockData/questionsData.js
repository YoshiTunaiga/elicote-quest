export const questionsData = [
  {
    question: `What is the output of the following code?`,
    display: `console.log(2 + "2" + "4");`,
    options: ["224", "24", "6", "NaN"],
    answer: "224",
  },
  {
    question: `What will the following code print?`,
    display: `console.log(typeof null);`,
    options: ["object", "null", "undefined", "boolean"],
    answer: "object",
  },
  {
    question: `What is the output of the following code?`,
    display: `console.log([1, 2] + [3, 4]);`,
    options: ["1,23,4", "NaN", "undefined", "12,34"],
    answer: "1,23,4",
  },
  {
    question: `What will the following code output?`,
    display: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "false",
  },
  {
    question: `What will be the result of the following expression?`,
    display: `console.log("5" - 3);`,
    options: ["2", "53", "NaN", "undefined"],
    answer: "2",
  },
  {
    question: `What will be printed by the following code?`,
    display: `console.log([] == ![]);`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },
  {
    question: `What does the following code return?`,
    display: `console.log(typeof NaN);`,
    options: ["number", "NaN", "undefined", "object"],
    answer: "number",
  },
  {
    question: `What will the following code output?`,
    display: `console.log(!!"false" == !!"true");`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },
  {
    question: `What is the result of the following code?`,
    display: `console.log([2] == 2);`,
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },
  {
    question: `What will this code print?`,
    display: `console.log(true + false);`,
    options: ["1", "0", "truefalse", "NaN"],
    answer: "1",
  },
];
