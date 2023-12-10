import { postBiasa } from "../api.js";
import { getValue } from "../element.js";
import { createFrontend } from "../gudangAPI.js";
import { getCookie } from "../cookies.js";


export default function createFrontendFix(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "npm": parseInt(getValue("npm")),
        "nama": getValue("nama"),
        "rilisjs": getValue("rilisjs"),
        "pemanggilanjs": getValue("pemanggilanjs"),
        "kelengkapancss": getValue("kelengkapancss"),
        "customdomain": getValue("customdomain"),
        "status": true
    }
    
    postBiasa(createFrontend,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Input Data");
        window.location.href = "../getFrontend.html";
    }else{
        alert('gagal input data');
        console.log("gagal");
    }
}