import { deleteCookie } from "./cookies.js";

export default function Logout() {
    deleteCookie();
    window.location.href = "../index.html";
}