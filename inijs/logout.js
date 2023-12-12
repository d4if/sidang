import { deleteCookie } from "./cookies.js";

export default function Logout() {
    deleteCookie();
    window.location.href = "https://repo.if.ulbi.ac.id/sidang/qrcode/";
}