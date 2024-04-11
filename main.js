class D {
  constructor(variables, axiom, rules) {
    this.variables = variables;
    this.axiom = axiom;
    this.rules = rules;
  }
  helper(inputString, n) {
    if (n <= 0) return inputString;
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
      let currentChar = inputString[i];
      let found = false;
      for (let j = 0; j < this.rules.length; j++) {
        if (currentChar === this.rules[j].from) {
          result += this.rules[j].to;
          found = true;
          break;
        }
      }
      if (!found) result += currentChar;
    }
    return this.helper(result, n - 1);
  }

  produce(n) {
    return this.helper(this.axiom, n);
  }
}

let variables = ["A", "B"];
let axiom = "A";
let rules = [
  { from: "A", to: "ABA" },
  { from: "B", to: "BBB" },
];
let LSystem = new D(variables, axiom, rules);
let n = prompt("Enter n:");
let result = LSystem.produce(n);
console.log(result);
