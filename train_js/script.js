const prices = [1690000, 2050000];
const checkboxes = document.querySelectorAll('.item-checkbox');
const selectAll = document.getElementById('selectAll');

function formatCurrency(num) {
  return num.toLocaleString('vi-VN') + '₫';
}

function updateTotal() {
  let total = 0;
  checkboxes.forEach((cb, index) => {
    if (cb.checked) total += prices[index];
  });
  document.getElementById('subtotal').innerText = formatCurrency(total);
  document.getElementById('total').innerText = formatCurrency(total);
}

selectAll.addEventListener('change', () => {
  console.log(selectAll.checked);
  checkboxes.forEach(cb => cb.checked = selectAll.checked);
  updateTotal();
});

checkboxes.forEach(cb => {
  cb.addEventListener('change', updateTotal);
});

function checkout() {
  alert("Bạn đã thanh toán đơn hàng thành công!");
}

function continueShopping() {
  alert("Đi mua sắm tiếp nào 🛍️");
}

// Khởi động tính toán ban đầu
updateTotal();
