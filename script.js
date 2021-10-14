let statement = "My name is Bog bag beg";

let regX = /b[oae]g/ig;
let result = regX.test(statement);
console.log(result)

let matchRegx = statement.match(regX)
console.log(matchRegx)

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let regsam = /[a-z]/ig;
 let rest = quoteSample.match(regsam)
 console.log(rest)

 var name
 name = "sam tariq";
 console.log(name)

 let todayDate = new Date ();
 let today = todayDate.getFullYear()

 let ageCal = birthYear => {
    return today - birthYear;
 }

 console.log(ageCal(1996))

 for (let i = 1; i < 10; i++){
    console.log(`${i} * 10 is ${i * 10}`)
 }

