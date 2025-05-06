const divJam = document.querySelector('#jam');
const divMenit = document.querySelector('#menit');
const divDetik = document.querySelector('#detik');

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const clearBtn = document.querySelector('#clear')
const lapBtn = document.querySelector('#lap');
const lapList = document.querySelector('#lap-list');

let detik = 0;
let menit = 0;
let jam = 0;
let interval = null;

const muncul = () => {
  const hitung = () => {
    detik++;
    if (detik == 60) {
      detik = 0;
      menit++;
    }
    if (menit == 60) {
      menit = 0;
      jam++;
    }
    if (jam == 24) {
      jam = 0;
    }
    muncul();
  };
  
  startBtn.addEventListener('click', () => {
    if (!interval) {
      interval = setInterval(hitung, 10);
    }
  });
  
  stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
  });

  clearBtn.addEventListener('click', () => {
    clearInterval;
    interval = null;
    jam = menit = detik = 0;
    
    muncul()
  })
  divDetik.textContent = detik < 10 ? `0${detik}` : detik;
  divMenit.textContent = menit < 10 ? `0${menit}` : menit;
  divJam.textContent = jam < 10 ? `0${jam}` : jam;
};

muncul();