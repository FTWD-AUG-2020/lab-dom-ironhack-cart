document.querySelector("#calculate").onclick = calculateAll;

function calculateAll() {
  let ironhackRows = document.querySelectorAll(".product");
  let total = 0;
  for (let row of ironhackRows) {
    let price = row.querySelector(".price span").innerHTML;
    let quantity = row.querySelector(".quantity input").value;
    let subtotal = price * quantity;
    total += subtotal;

    row.querySelector(".subtotal span").innerHTML = subtotal;
  }
  document.querySelector("#total-value span").innerHTML = total;
}

function deleteRow(e) {
  let deleteItem = e.target.parentElement.parentElement
  console.log(deleteItem);
  deleteItem.remove()
}

let removeButtons = document.querySelectorAll(".btn-remove");
console.log(removeButtons);
for (let i = 0; i < removeButtons.length; i++) {
  let eachButton = removeButtons[i]
  eachButton.onclick = deleteRow
}

document.querySelector('#create').onclick = createProduct
function createProduct() {
let productName = document.querySelector('#broccoli').value
let productPrice = document.querySelector('#raspberries').value
console.log(productName, productPrice)
}