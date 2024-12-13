const container = document.createElement("div");
document.body.appendChild(container);
container.className = "container";

const input = document.createElement("input");
container.appendChild(input);
input.id = "input";
const typeText = document.createAttribute("type");
typeText.value = "text";
const name = document.createAttribute("name");
name.value = "name";
input.setAttributeNode(typeText);
input.setAttributeNode(name);

// create row
const row = document.createElement("div");
row.id = "row";
container.appendChild(row);

// create columns - 4
//  col - 1
const col_1 = document.createElement("div");
const bold1 = document.createElement("b");
col_1.appendChild(bold1);
row.appendChild(col_1);
col_1.className = "col1";
bold1.innerText = "+";

bold1.className = "bold-1";

// col - 2
const col_2 = document.createElement("div");
const bold2 = document.createElement("b");
col_2.appendChild(bold2);
row.appendChild(col_2);
col_2.className = "col_2";
bold2.innerText = "-";

bold2.className = "bold-2";

// col - 3
const col_3 = document.createElement("div");
const bold3 = document.createElement("b");
col_3.appendChild(bold3);
row.appendChild(col_3);
col_3.className = "col_3";
bold3.innerText = "x";
// col - 4

bold3.className = "bold-3";

const col_4 = document.createElement("div");
const bold4 = document.createElement("b");
col_4.appendChild(bold4);
row.appendChild(col_4);
col_4.className = "col_4";
bold4.innerText = "/";

bold4.className = "bold-4";

// create row for numbers

const rowNumber = document.createElement("div");
rowNumber.id = "row";
container.appendChild(rowNumber);

// col for number 1
const colNumber1 = document.createElement("div");
colNumber1.className = "colNum1";
const boldNum1 = document.createElement("b");
boldNum1.innerText = "7";
boldNum1.className = "boldNum";
rowNumber.appendChild(colNumber1);
colNumber1.appendChild(boldNum1);

// col for number 2
const colNumber2 = document.createElement("div");
colNumber2.className = "colNum2";
const boldNum2 = document.createElement("b");
boldNum2.innerText = "8";
boldNum2.className = "boldNum";
rowNumber.appendChild(colNumber2);
colNumber2.appendChild(boldNum2);

// col for number 3
const colNumber3 = document.createElement("div");
colNumber3.className = "colNum3";
const boldNum3 = document.createElement("b");
boldNum3.innerText = "9";
boldNum3.className = "boldNum";
rowNumber.appendChild(colNumber3);
colNumber3.appendChild(boldNum3);

// =============================

// create row for numbers

const rowNumber2 = document.createElement("div");
rowNumber2.id = "row";
container.appendChild(rowNumber2);

// col for number 1
const colNumber4 = document.createElement("div");
colNumber4.className = "colNum4";
const boldNum4 = document.createElement("b");
boldNum4.innerText = "4";
boldNum4.className = "boldNum";
rowNumber2.appendChild(colNumber4);
colNumber4.appendChild(boldNum4);

// col for number 2
const colNumber5 = document.createElement("div");
colNumber5.className = "colNum5";
const boldNum5 = document.createElement("b");
boldNum5.innerText = "5";
boldNum5.className = "boldNum";
rowNumber2.appendChild(colNumber5);
colNumber5.appendChild(boldNum5);

// col for number 3
const colNumber6 = document.createElement("div");
colNumber6.className = "colNum6";
const boldNum6 = document.createElement("b");
boldNum6.innerText = "6";
boldNum6.className = "boldNum";
rowNumber2.appendChild(colNumber6);
colNumber6.appendChild(boldNum6);

// ===========================================

// create row for numbers

const rowNumber3 = document.createElement("div");
rowNumber3.id = "row";
container.appendChild(rowNumber3);

// col for number 1
const colNumber7 = document.createElement("div");
colNumber7.className = "colNum7";
const boldNum7 = document.createElement("b");
boldNum7.innerText = "1";
boldNum7.className = "boldNum";
rowNumber3.appendChild(colNumber7);
colNumber7.appendChild(boldNum7);

// col for number 2
const colNumber8 = document.createElement("div");
colNumber8.className = "colNum8";
const boldNum8 = document.createElement("b");
boldNum8.innerText = "2";
boldNum8.className = "boldNum";
rowNumber3.appendChild(colNumber8);
colNumber8.appendChild(boldNum8);

// col for number 3
const colNumber9 = document.createElement("div");
colNumber9.className = "colNum6";
const boldNum9 = document.createElement("b");
boldNum9.innerText = "3";
boldNum9.className = "boldNum";
rowNumber3.appendChild(colNumber9);
colNumber9.appendChild(boldNum9);

// bottom 

const rowForBottom = document.createElement("div");
rowForBottom.className = "rowForBottom";
container.appendChild(rowForBottom);

const colForBottom1 = document.createElement('div')
rowForBottom.appendChild(colForBottom1)
const boldBottom1 = document.createElement('b')
boldBottom1.innerText='0';
colForBottom1.appendChild(boldBottom1)

const colForBottom3 = document.createElement('div')
rowForBottom.appendChild(colForBottom3)
const boldBottom3 = document.createElement('b')
boldBottom3.innerText='Clear';
colForBottom3.appendChild(boldBottom3)

const colForBottom2 = document.createElement('div')
rowForBottom.appendChild(colForBottom2)
const boldBottom2 = document.createElement('b')
boldBottom2.innerText='Calculate';
colForBottom2.appendChild(boldBottom2)


