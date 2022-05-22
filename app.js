
function promptMe() {
    let loansumElement = prompt("Write the sum you want to loan");
    alert (`You are going to loan ${loansumElement}`);
}
const balanceElement = document.getElementById("balance")
const oustandingloanElement = document.getElementById("outstandingloan")
const payElement = document.getElementById("pay")
/*let PCs = []  = document.getElementById("selectPC");
let price = [];
let cart = [];
let totalDue = 0.0;

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
.then(response => response.json())
.then(data => PCs = title)
.then(PCs => addPCsToMenu(PCs));

const addPCsToMenu = (PCs) => {
PCs.forEach(x => addPCToMenu(x));
}

const addPCToMenu = (PC) => {
 const PCElement = document.createElement("option");
 PCElement.value = PC.id;
 PCElement.appendChild(document.createTextNode(PC.title));
 PCsElement.appendChild(PCElement);
}*/
const url = 'https://noroff-komputer-store-api.herokuapp.com/computers';
const computersElement = document.getElementById('computers')
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(element => {
    const newLi = document.createElement('option');
    newLi.id = newArray.id;
    newLi.value = newArray.title;
    newLi.innerHTML = newArray.title;
    computersElement.appendChild(newLi);
});
}
