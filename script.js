const botao = document.getElementById('tema');
const icone = botao.querySelector('i');

const salvaTema = localStorage.getItem('theme');

if(salvaTema === 'dark'){
    document.body.classList.add('dark-mode');

    icone.classList.replace('fa-moon', 'fa-sun');
}

botao.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');

    const dark = document.body.classList.contains('dark-mode');

    if(dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
})