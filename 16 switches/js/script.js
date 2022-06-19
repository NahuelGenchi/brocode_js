/*
    statement that examines a value
    for a match against many case clauses.
    More efficient than many "else if" statements.
*/

/*
let grade = "Pizza";

if (grade == "A") {
    console.log("You did great!");
} else if (grade == "B") {
    console.log("You did good!");
} else if (grade == "C") {
    console.log("You did okay!");
} else if (grade == "D") {
    console.log("You passed.. barely!");
} else if (grade == "F") {
    console.log("You failed!");
} else {
    console.log(`${grade} is not a letter grade.`);
};
*/

let grade = Number(prompt("Type your grade:"));
console.log(typeof grade);

switch(true) {
    case grade >= 9:
        console.log("You did great!");
        break;
    case grade >= 8:
        console.log("You did good!");
        break;
    case grade >= 7:
        console.log("You did okay!");
        break;
    case grade >= 6:
        console.log("You passed.. barely!");
        break;
    case grade < 6:
        console.log("You failed!");
        break;
    default:
        console.log(`${grade} is not a letter grade.`);
};