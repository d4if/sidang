// Fetch all products from the server
function getBackend() {
  fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getallbe')
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
      <td>${product.Autentikasitoken}</td>
    
      <td>${product.Packagesendiri}</td>
      <td>${product.Endpointgcfjakarta}</td>
      <td>${product.Integrasiwamyid}</td>
      <td>${product.Status ? 'True' : 'False'}</td>
      <td><a href="updatedBackend.html?npm=${product.Npm}&nama=${product.Nama}&autentikasitoken=${product.Autentikasitoken}&packagesendiri=${product.Packagesendiri}&endpointgcfjakarta=${product.Endpointgcfjakarta}&integrasiwamyid=${product.Integrasiwamyid}">Edit</a></td>
      <td><a href="deleteBackend.html?npm=${product.Npm}">Delete</a></td>
    `;
    tableBody.appendChild(row);
  });
}

// Fetch and display products on page load
window.onload = getBackend;
