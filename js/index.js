document.querySelector('#calculate').onclick = calculateAll;

function calculateAll() {
  let ironhackRows = document.querySelectorAll('.product');
  let total = 0;
  for (let row of ironhackRows) {
    let price = row.querySelector('.price span').innerHTML;
    let quantity = row.querySelector('.quantity input').value;
    let subtotal = price * quantity;
    total += subtotal

    row.querySelector('.subtotal span').innerHTML = subtotal;
    
  }
  document.querySelector('#total-value span').innerHTML= total
}







