import { getCookie } from "./inijs/cookies.js";
import { patchHeader } from "./inijs/api.js";
import { updateBackend } from "./inijs/gudangAPI.js";

export default function editBackend(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let npm = parseInt(document.getElementById('npm').value);
    let nama = document.getElementById('nama').value;
    let autentikasitoken = document.getElementById('autentikasitoken').value;
    let packagesendiri = document.getElementById('packagesendiri').value;
    let endpointgcfjakarta = document.getElementById('endpointgcfjakarta').value;
    let integrasiwamyid = document.getElementById('integrasiwamyid').value;
    let status = document.getElementById('status').checked;

    let datainjson = {
        "npm": npm,
        "nama": nama,
        "autentikasitoken": autentikasitoken,
        "packagesendiri": packagesendiri,
        "endpointgcfjakarta": endpointgcfjakarta,
        "integrasiwamyid": integrasiwamyid,
        "status": status
    };

    patchHeader(updateBackend,datainjson,tokenkey,tokenvalue,responseFunction)
}

function responseFunction(result) {
    if (result.status == true) {
        alert('berhasil update')
        console.log("Berhasil update")
        window.location.href = "getBackend.html";
    } else {
        alert('gagal update')
        console.log("Gagal")
    }
}


