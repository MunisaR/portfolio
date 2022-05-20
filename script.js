//scroll animation
window.addEventListener('scroll', ()=>{
    let about = document.querySelector('.text-left')
    let aboutPosition = about.getBoundingClientRect().top
    let screen_aboutPosition = window.innerHeight
    if (aboutPosition <screen_aboutPosition){
        about.classList.add('active')
    }
    else{
        about.classList.remove('active')
    }

    let name = document.querySelector('.name')
    let namePosition = name.getBoundingClientRect().top
    let screen_namePosition = window.innerHeight
    if (namePosition <screen_namePosition){
        name.classList.add('active')
    }
    else{
        name.classList.remove('active')
    }

    let surname = document.querySelector('.surname')
    let surnamePosition = about.getBoundingClientRect().top
    let screen_surnamePosition = window.innerHeight
    if (surnamePosition <screen_surnamePosition){
        surname.classList.add('active')
    }
    else{
        surname.classList.remove('active')
    }
})