let burger = document.getElementById('burger')
let close = document.getElementById('close')
let list = document.getElementById('list')
let search = document.getElementById('search')
let searchClose = document.getElementById('search__close')
let searchBtn = document.getElementById('searchBtn')

burger.addEventListener('click', () => {
    list.style.right = "0"
})

close.addEventListener('click', () => {
    list.style.right = "-100%"
})

searchBtn.addEventListener('click', () => {
    searchClose.style.display = 'flex'
    search.style.display = 'flex'
    search.focus()
})

searchClose.addEventListener('click', () => {
    search.style.display = 'none'
    searchClose.style.display = 'none'
    search.value = ''
})

let heroImg = document.querySelectorAll('#hero-img')
let mainImg = document.querySelector('#m-hero-img')

heroImg.forEach((item, index) => {
    item.addEventListener('click', () => {
        mainImg.src = item.src
    })
})