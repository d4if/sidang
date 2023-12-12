import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createBackend } from "../gudangAPI.js";
import { getCookies } from "../cookies.js";


export default function createBackendFix(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookies("login");


    let datainjson = {
        "npm": parseInt(getValue("npm")),
        "nama": getValue("nama"),
        "autentikasitoken": getValue("autentikasitoken"),
        "packagesendiri": getValue("packagesendiri"),
        "endpointgcfjakarta": getValue("endpointgcfjakarta"),
        "integrasiwamyid": getValue("integrasiwamyid"),
        "status": true
    }
    
    postBiasa(createBackend,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Input Data");
        window.location.href = "../../getBackend.html";
    }
    else{
        alert('gagal input data');
        console.log("gagal");
    }
}