#!/usr/bin/env node

import inquirer from "inquirer";

let mybalance = 10000; // Dollar
let mypin = 1235;


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
            
        }
    ]
);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!");



let operationAns = await inquirer.prompt(
    [

        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw","check balance"]
        }
    ]
);
console.log(operationAns);
if(operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name:"amount",
                message: "enter your amount",
                type: "number",
            }
        ]
    );


mybalance -= amountAns.amount;
console.log("Your remaining balance is:" + mybalance)
}
else if(operationAns.operation === "check balance") {
    console.log("Your balance is:" + mybalance)
}
}

else {
    console.log("Incorrect pin number");
}