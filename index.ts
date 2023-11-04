//variables
//datastructures
//operators
//functions
//loops
//conditional statements

//!!! NO!!!! input/output handling

let x: number = 5       // user input 1 - from database, file, ui (html)
let y: number = 6       // user input 2
let z: number = 7

let addTwoNumbers = (one: number, other: number) => {
    let result = one + other
    return result
}

let myCostumeMathOperator = (num1: number, num2: number, num3: number) => {
    let part1 = num1 + num2
    let part2 = num3 + part1
    return part2
}

let resultToLog = myCostumeMathOperator(x, y, z)
let resultToLog2 = myCostumeMathOperator(1, 2, 3)
let resultToLog3 = myCostumeMathOperator(10, 11, 12)


console.log(resultToLog)     // dummy output handling - write to file/database / to ui (html)
console.log(resultToLog2)     // dummy output handling - write to file/database / to ui (html)
console.log(resultToLog3)     // dummy output handling - write to file/database / to ui (html)

//--------------

type Account = {
    id: string
    balance: number
    createdAt: number
}

let acc1: Account = {
    id: "hkdghd",
    balance: 200,
    createdAt: 15646535
}

let acc2: Account = {
    id: "kjfkmgdkh",
    balance: 1500,
    createdAt: 1357584634
}
let acc3: Account = {
    id: "kjfjgdkh",
    balance: 1600,
    createdAt: 135854634
}
let acc4: Account = {
    id: "kjfgdkh",
    balance: 1500,
    createdAt: 13585454634
}
let acc5: Account = {
    id: "kjfgdfdkh",
    balance: 1400,
    createdAt: 1362584634
}


let transfer = (sender: Account, receiver: Account, amount: number) => {
    sender.balance = sender.balance - amount
    receiver.balance = receiver.balance - amount
}

transfer(acc1, acc2, 10)
transfer(acc3, acc1, 30)

//a fenti ugyan az mint a lenti, csak egyszerűbb, egyben leírja az utalások műveletét

acc1.balance = acc1.balance - 10
acc2.balance = acc2.balance + 10
