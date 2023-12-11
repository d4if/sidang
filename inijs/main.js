



import editFrontend from "../scriptupdatedFrontend2.js";
import editBackend from "../scriptupdatedBackend2.js";

import LoginAdminFix from "../signinadminfix.js";
import createFrontendFix from "./content/createFrontend.js";
import createBackendFix from "./content/createBackend.js";

window.LoginAdminFix = LoginAdminFix;

import Logout from "./logout.js";
window.Logout = Logout;
// window.checkCookie = checkCookie;

window.createFrontendFix = createFrontendFix;
window.createBackendFix = createBackendFix;

window.editFrontend = editFrontend;
window.editBackend = editBackend;


import adminAuthorization from "../qrcode/auth/authorizationUser.js";

const previewadminAuthorization = document.getElementById('mainadminAuthorization');
if (previewadminAuthorization) {
    adminAuthorization();
} else {
    console.log("Element with ID 'mainadminAuthorization' not found. adminAuthorization not executed.");
}
// window.createBackend = createBackend;
// window.editFrontend = editFrontend;
// window.editBackend = editBackend;