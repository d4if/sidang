import { getCookie,deleteCookie } from "../../inijs/cookies.js";
import { APIAuthorizationAdmin } from "../../inijs/gudangAPI.js";

export default function adminAuthorization() {
    let tokencookie = getCookie("login");

    // Fetch GET request
    fetch(APIAuthorizationAdmin, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: tokencookie
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Process the received data
        // handleAuthorizationResult(data);

        return data; // Return the data for use in main.js if needed
    })
    .catch(error => {
        // Handle fetch errors
        console.error('Fetch Error:', error);
        throw error; // Throw back the error for use in main.js if needed
    });
}

function handleAuthorizationResult(data) {
    if (data.status === true) {
        // Additional logic based on the role and elements
        
    } else if (data.status === false) {
        // No token header or no decode result
        deleteCookie();
        window.location.href="/qrcode/index.html";

    }
}
