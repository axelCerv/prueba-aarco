const navbar = document.querySelector('.nav-items');
const item_menu = document.querySelectorAll('.nav-item');
const logo = document.querySelector('.logo');

logo.addEventListener('click', ()=>{
    getInicio()
    navbar.classList.remove('active')
})

item_menu.forEach( e =>{
    e.addEventListener('click', () =>{
        
    })
})

const openmenu = () =>{
    navbar.classList.add('active')
}

const closemenu = () =>{
    navbar.classList.remove('active')
}

const inicio = document.getElementById('inicio');
const about = document.getElementById('about');

const getInicio = () =>{
    navbar.classList.remove('active')
    about.style.display = 'none';
    inicio.style.display = 'grid';
}

const getAbout = () =>{
    navbar.classList.remove('active')
    inicio.style.display = 'none';
    about.style.display = 'block';
}

const btnCloseContact = document.querySelector('.close-contact');
const btnContacto = document.querySelector('.btn-contacto');
const contacto = document.getElementById('contacto');


btnContacto.addEventListener('click',()=>{
    navbar.classList.remove('active')

    contacto.classList.add('active')
})
btnCloseContact.addEventListener('click', () =>{
    contacto.classList.remove('active')
})