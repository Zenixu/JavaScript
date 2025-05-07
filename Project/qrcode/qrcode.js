let qrcode = new QRCode(
  document.querySelector(".qrcode")
);

qrcode.makeCode("huh?");

function generateQr() {
  if (
    document.querySelector("input").value == "" ||
    document.querySelector("input").value == " ") {
    alert("Input ga boleh kosong");
  } 
  else {
    qrcode.makeCode(
      document.querySelector("input").value);
  }
}