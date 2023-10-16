// 1 MILESTONE
const list = [];
let userFood;
while (userFood !== "stop" && userFood !== "") {
    userFood = prompt("Inserisci cibo, pazzo");
    userFood.trim().toLowerCase
    if (userFood !== "stop") {
        list.push(userFood)       
    }
}
