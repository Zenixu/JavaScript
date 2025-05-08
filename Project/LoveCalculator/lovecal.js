function calculateLove() {
  const player1 = document.getElementById('player1').value.trim();
  const player2 = document.getElementById('player2').value.trim();
  
  if (player1 == '' || player2 == '') {
      alert('Silakan masukkan kedua nama!');
      return;
  }
  
  const percentage = Math.floor(Math.random() * 101);
  
  document.getElementById('name1').textContent = player1;
  document.getElementById('name2').textContent = player2;
  document.getElementById('percentage').textContent = percentage + '%';
  
  let message = '';
  if (percentage >= 89 && percentage <= 100) {
      message = "Pasangan sempurna";
  } else if (percentage >= 67 && percentage <= 88) {
      message = "Pasangan sudah cocok namun harus ditingkatkan lagi";
  } else if (percentage >= 45 && percentage <= 66) {
      message = "Pasangan masih kurang cocok";
  } else if (percentage >= 27 && percentage <= 44) {
      message = "Pasangan ga cocok";
  } else {
      message = "Mending cari pasangan lain ><";
  }
  
  document.getElementById('message').textContent = message;
  document.getElementById('result').style.display = 'block';
}
