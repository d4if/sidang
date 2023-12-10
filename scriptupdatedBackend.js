// value params
const searchParams = new URLSearchParams(window.location.search);
const npm = searchParams.get("npm");
const nama = searchParams.get("nama");
const autentikasitoken = searchParams.get("autentikasitoken");
const packagesendiri = searchParams.get("packagesendiri");
const endpointgcfjakarta = searchParams.get("endpointgcfjakarta");
const integrasiwamyid = searchParams.get("integrasiwamyid");
const status = searchParams.get("status");

// change value form
document.getElementById("npm").value = npm;
document.getElementById("nama").value = nama;
document.getElementById("autentikasitoken").value = autentikasitoken;
document.getElementById("packagesendiri").value = packagesendiri;
document.getElementById("endpointgcfjakarta").value = endpointgcfjakarta;
document.getElementById("integrasiwamyid").value = integrasiwamyid;
document.getElementById("status").checked = status === 'true';