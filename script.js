//scroll animation
window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.text-left')
    let contentPosition = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight
    if (contentPosition <screenPosition){
        content.classList.add('active')
    }
    else{
        content.classList.remove('active')
    }
})