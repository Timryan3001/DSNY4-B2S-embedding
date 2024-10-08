// We are creating constants/variables that we will use later on
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// Logging information about our workbook

function logWorkbookInformation() {
  //this is finding the workbook name
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);
}

// Run our function, when the workbook becomes interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);
