import { postLogin } from "./inijs/api.js";
import { getValue } from "./inijs/element.js";
import { setCookieWithExpireHour } from "./inijs/cookies.js";
import { adminloginbaru } from "./inijs/gudangAPI.js"

const loginButton = document.getElementById("btnLogin");
const loadingIndicator = document.getElementById("loadingIndicator");

export default function LoginAdminFix(){
    let username = getValue("username");
    let password = getValue("password");
    if (!username) {
        // alert("Username perlu untuk diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        // alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    let datainjson = {
        "username": username,
        "password": password
    }

    loginButton.style.display = "none";
    loadingIndicator.style.display = "block";

    postLogin(adminloginbaru,datainjson,responseData);

}

// function responseData(data) {
//     loadingIndicator.style.display = "none";
//     if (data.message == "Selamat Datang") {
//         const token = data.token;
//         setCookieWithExpireHour("token",token,2);
//         window.location.href = "../../user";
//         console.log(token);
//     } 
// }

function responseData(data) {
    loadingIndicator.style.display = "none";

    if (data.status === true) {
        const token = data.token;

        // You can use the extracted data as needed

        // For example, setting a cookie
        setCookieWithExpireHour("token", token, 2);

        // Logging some information
        console.log("token", token);

        // Additional actions you may want to perform

        // For example, redirecting to another page
        window.location.href = "./home.html";
    } else {
        // Handle the case where login is not successful
        alert('akun tidak ada')
        window.location.href = "./index.html";
        console.error("Login failed. Status:", data.status, "Message:", data.token);
    }
}
