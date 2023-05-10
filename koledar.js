const koledar = document.getElementById('koledar');
const danasnjiDatum = new Date();
const mesec = danasnjiDatum.getMonth();
const leto = danasnjiDatum.getFullYear();

function ustvariKoledar(mesec, leto) {
  koledar.innerHTML = '';

  let prviDanVMesecu = new Date(leto, mesec, 1);
  let zadnjiDanVMesecu = new Date(leto, mesec + 1, 0);
  let zacetniDan = prviDanVMesecu.getDay();

  let trenutniDan = new Date(leto, mesec, 1 - zacetniDan);

  for (let i = 0; i < 42; i++) {
    let dan = document.createElement('div');
    dan.className = 'dan';
    dan.dataset.datum = trenutniDan.toISOString().slice(0, 10);
    
    let datum = document.createElement('div');
    datum.className = 'datum';
    datum.textContent = trenutniDan.getDate();
    dan.appendChild(datum);
    
    let delnice = document.createElement('div');
    dan.appendChild(delnice);
    
    dan.addEventListener('click', dodajDelnico);
    
    koledar.appendChild(dan);
    trenutniDan.setDate(trenutniDan.getDate() + 1);
  }
}

function dodajDelnico(e) {
  let imeDelnice = prompt('Vnesite ime delnice:');
if (imeDelnice) {
let dan = e.currentTarget;
let delnice = dan.querySelector('div:nth-child(2)');
let povezava = prompt('Vnesite povezavo do članka:');

let delnicniLink = document.createElement('a');
delnicniLink.className = 'delnicni-link';
delnicniLink.href = povezava;
delnicniLink.target = '_blank';
delnicniLink.textContent = imeDelnice;

delnice.appendChild(delnicniLink);
}
}
ustvariKoledar(mesec, leto);
