// Fetch all products from the server
function getFrontend() {
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallfe')
    .then(response => response.json())
    .then(data => {
      if (data.status === true) {
        displayProducts(data.data);
      } else {
        console.error('Failed to fetch products');
      }
    })
    .catch(error => console.error('Error:', error));
}

// Display products in the table
function displayProducts(products) {
  const tableBody = document.getElementById('productTableBody');
  tableBody.innerHTML = '';

  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.Npm}</td>
      <td>${product.Nama}</td>
      <td>${product.Rilisjs}</td>
      <td>${product.Pemanggilanjs}</td>
      <td>${product.Kelengkapancss}</td>
      <td>${product.CustomDomain}</td>
      <td>${product.Status ? 'True' : 'False'}</td>
      <td><a href="updatedFrontend.html?npm=${product.Npm}&nama=${product.Nama}&rilisjs=${product.Rilisjs}&pemanggilanjs=${product.Pemanggilanjs}&kelengkapancss=${product.Kelengkapancss}&customdomain=${product.CustomDomain}&status=${product.Status}">Edit</a></td>
      <td><a href="deleteFrontend.html?npm=${product.Npm}">Delete</a></td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch and display products on page load
window.onload = getFrontend;
