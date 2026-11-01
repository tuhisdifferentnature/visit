document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const price = params.get('price');

  if (product) {
    document.getElementById('product-display').textContent = product;
    document.getElementById('product-hidden').value = product;
  }
  if (price) {
    document.getElementById('price-display').textContent = '৳ ' + price;
    document.getElementById('price-hidden').value = price;
  }
});
