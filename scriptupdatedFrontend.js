// value params
const searchParams = new URLSearchParams(window.location.search);
const npm = searchParams.get("npm");
const nama = searchParams.get("nama");
const rilisjs = searchParams.get("rilisjs");
const pemanggilanjs = searchParams.get("pemanggilanjs");
const kelengkapancss = searchParams.get("kelengkapancss");
const customdomain = searchParams.get("customdomain");
const status = searchParams.get("status");

// change value form
document.getElementById("npm").value = npm;
document.getElementById("nama").value = nama;
document.getElementById("rilisjs").value = rilisjs;
document.getElementById("pemanggilanjs").value = pemanggilanjs;
document.getElementById("kelengkapancss").value = kelengkapancss;
document.getElementById("customdomain").value = customdomain;
document.getElementById("status").checked = status === 'true';