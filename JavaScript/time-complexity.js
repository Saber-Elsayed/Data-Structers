/**********EX1*************/
//The run time of this code is O(n) in worst//

const getBalance = function (bankOperations) {
  let balance = 0;
  for (let op of bankOperations) {
    balance += op;
  }
  return balance;
};
console.log(getBalance([-27, -43, -2400, -700, 15000, 58]));

/**********EX2*************/
//The run time of this code is O(logn) in worst//

const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
};

/**********EX3*************/
//The run time of getHype function is O(1) in worst case//
const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 },
];

const relevantSides = allSides.filter((s) => s.a % 3 == 0);
for (let sides of relevantSides) {
  console.log(getHype(sides));
}

const getHype = function (sides) {
  let a = sides.a;
  let b = sides.b;
  let sumOfSquares = a * a + b * b;
  return Math.sqrt(sumOfSquares);
};

/**********EX4*************/
// n as the number of students,

//The run time of getDistributions function is O(n) in worst case//

const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c",
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c",
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a",
  },
};
const studentGithubs = ["brBlds", "dvOna", "nmPrz"];

const distributions = {
  1: {},
  2: {},
  3: {},
};

const getDistributions = function (studentAnswers) {
  studentGithubs.forEach((sg) => {
    let answers = studentAnswers[sg];

    Object.keys(answers).forEach((questionNumber) => {
      let letterAnswer = answers[questionNumber];

      distributions[questionNumber][letterAnswer]
        ? distributions[questionNumber][letterAnswer]++
        : (distributions[questionNumber][letterAnswer] = 1);
    });
  });

  return distributions;
};

getDistributions(studentAnswers);

/**********EX5*************/
// n is the number of recipients

//The run time of getDistributions function is O(n) in worst case//
const sendEmails = (email, recepients) =>
  recepients.forEach((r) => r.sendEmail(email));

const emailManager = function () {
  let email = generateEmail();

  $.get("/recepients", function (recepients) {
    sendEmails(email, recepients);
  });
};

/**********EX7*************/
/// The run timw of findEmployeeSalary is O(1)///
const employeeSalaries = {
  ax01: 1300,
  qs84: 840,
  bg33: 2700,
  // Add more employees here...
};

// Function to find the salary of an employee by their ID
function findEmployeeSalary(employeeID) {
  return employeeSalaries[employeeID];
}

// Example usage
console.log(findEmployeeSalary("ax01")); // Output: 1300
console.log(findEmployeeSalary("qs84")); // Output: 840
console.log(findEmployeeSalary("bg33")); // Output: 2700
