/*
    break = breaks out of a loop entirely
    continue = skip an iteration of a loop
*/

for(let i = 1; i <= 20; i++) {
    if (i == 13) {
        console.log("STOP");
        break;
    }
    console.log(i);
};