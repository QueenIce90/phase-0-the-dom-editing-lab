
// Wait for the DOM to be fully loaded before manipulating it
document.addEventListener("DOMContentLoaded", function() {
  // Select the elements by their tags
  const h1Element = document.querySelector("h1");
  const paragraphElement = document.querySelector("p");
  const anchorElement = document.querySelector("a");
  const tableElement = document.querySelector("table");

  // Modify the content of the selected elements
  h1Element.textContent = "My Updated HTML adventure";

  // Modify the content of the paragraph and add a new <span> element
  paragraphElement.innerHTML = `
    We're writing HTML markup to display in our <strong>browser</strong>. We're
    basically telling computers what to do. <em>Neat!</em>
    We're writing <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> markup too.
    <span>This is a new span element added dynamically.</span>
  `;

  // Modify the href attribute of the anchor element
  anchorElement.href = "https://www.example.com";

  // Modify the content of the table cells
  const tableRows = tableElement.querySelectorAll("tbody tr");
  tableRows[0].cells[1].textContent = "block";
  tableRows[1].cells[1].textContent = "block";
  tableRows[2].cells[1].textContent = "inline";
  tableRows[3].cells[1].textContent = "inline";

  // Create a new row in the table dynamically
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>span</td>
    <td>inline</td>
  `;
  tableElement.querySelector("tbody").appendChild(newRow);
});
