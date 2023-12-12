function getBackend() {
  var myHeaders = new Headers();
  var tokenvalue = getCookie("login")
  myHeaders.append("token", tokenvalue);
  var requestOptions = {
    headers: myHeaders,
    method: 'GET',
    redirect: 'follow'
    };

    fetch('https://asia-southeast2-testlogin-366704.cloudfunctions.net/getall', requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.status === true) {
        // Display username (assuming the first element in the data array has the username)
        const username = data.username;
        console.log('Username:', username);
  
        // Display products in the table
        displayProducts(data.data,username);
      } else {
        console.error('Failed to fetch products');
      }
    })
    .catch(error => console.error('Error:', error));
  }
  
  // Display products in the table
  function displayProducts(products,username) {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';
  
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${username}</td>
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

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
	}