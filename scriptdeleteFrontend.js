function deleteFrontend() {
    const frontendID = parseInt(document.getElementById('frontendID').value)
    let tokenvalue = getCookie('login')
  
    // Lakukan validasi jika productID tidak kosong
    if (frontendID === '') {
      alert('Please enter a comment ID');
      return;
    }
  
    const endpoint = 'https://asia-southeast2-testlogin-366704.cloudfunctions.net/deletefeee';
    const payload = {
      npm: frontendID
    };
  
    fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': tokenvalue
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          document.getElementById('response').innerText = 'Frontend deleted successfully';
          window.location.href = "../getFrontend.html";
        } else {
          document.getElementById('response').innerText = 'Failed to delete Frontend';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'An error occurred, please try again.';
      });
  }
  


const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("npm");
const val = document.getElementById("frontendID");
val.value = id;
console.log(id);

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