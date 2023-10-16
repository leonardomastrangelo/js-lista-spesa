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

// 2 MILESTONE
const listEl = document.getElementById("list");
let listContainer = document.createElement("div");
listContainer.classList.add("display-4","fw-normal", "bg-primary", "rounded-3", "text-light")
for (let i = 0; i < list.length; i++) {
    listContainer.innerHTML += `${list[i]}, `
}
listEl.append(listContainer)
console.log(list, listContainer);