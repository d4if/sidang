import { getCookie,deleteCookie } from "../cookies.js";
import { APIAuthorizationAdmin } from "../../inijs/gudangAPI.js";

export default function adminAuthorization() {
    const myHeaders = new Headers();
    let tokencookie = getCookie("login");
    myHeaders.append("login", tokencookie);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // Fetch GET request
    return fetch(APIAuthorizationAdmin, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Process the received data
        handleAuthorizationResult(data);

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
        window.location.href="https://repo.if.ulbi.ac.id/sidang/qrcode/";

    }
}
