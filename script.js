const temaBtn = document.getElementById('temaBtn');
let temaEscuro = false;

temaBtn.addEventListener('click', () => {
    if (!temaEscuro) {
        document.body.style.backgroundColor = '#2c3e50';
        document.body.style.color = '#ecf0f1';
        temaEscuro = true;
    } else {
        document.body.style.backgroundColor = '#f0f8f5';
        document.body.style.color = '#2c3e50';
        temaEscuro = false;
    }
});