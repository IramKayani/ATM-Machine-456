#!/usr/bin/env node
import inquirer from "inquirer";

let mybalance= 5000;
let mypin = 1234;
let pinanswer = await inquirer.prompt(
    [
        {name:"Q1",
         type:"number",
         message:"Enter your Pin",

        }

]
);
if(pinanswer.Q1 === mypin) {
    console.log("Welcome");
    let operationAns = await inquirer.prompt(
        [
         {
            name:"Operation",
            type: "list",
            message:"Select Operation",
            choices:["Withdraw", "CheckBalance"]

        }
    ]);
    if(operationAns.Operation === "Withdraw"){
        let Amountans = await inquirer.prompt(
            [
                {
                    name:"amount",
                    type:"number",
                    message:"Enter Amount",
                }

        ]

        )
       mybalance -= Amountans.amount
       console.log("your remaning balance is", + mybalance)
    }
else if(operationAns.Operation === "CheckBalance"){
    
   console.log("your balance is", + mybalance)
}
}
else(console.log("WrongPin"))