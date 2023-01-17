const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const ttl = document.getElementById('ttl');
const tbody = document.getElementById('tbody');
const price = document.getElementById('crnt');
const atc = document.getElementById('atc');
const newTr = document.createElement('tr');
let cb = document.getElementsByClassName('cb');
let tr = document.getElementById('tr');
let sub = document.getElementsByClassName('sub');
let qty = document.getElementsByClassName('qty');
let sum = 0;

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


for (let i = 0; i < qty.length; i++) {
    let crnt = qty[i];
    crnt.addEventListener('change', event => {
        for (let j = 0; j < sub.length; j++) {
            let crnt = sub[j];
            crnt.innerHTML = `$${price.textContent.substring(1) * qty[i].value}`
        }
        let active = event.target;
        console.log(active)
    })
}

for (let i = 0; i < cb.length; i++) {
    let crnt = cb[i];
    crnt.addEventListener('click', event => {
        let active = event.target;
        active.parentElement.parentElement.parentElement.remove();
    })
}

atc.addEventListener('click', () => {
    tbody.innerHTML += `<tr id="tr">
    <td><a href="#"><i class="fas fa-times-circle" id="cb" onclick="remove()"></i></a></td>
    <td><img src="/img/products/f${Math.ceil(Math.random() * 8)}.jpg" alt="Product"></td>
    <td>Cartoon Astronaut T-Shirts</td>
    <td id="crnt">$118</td>
    <td><input type="number" value="1" min="1" id="qty"></td>
    <td id="sub">$118</td>
    </tr>`;
})
