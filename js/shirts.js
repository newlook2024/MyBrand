let burger = document.getElementById('burger')
let close = document.getElementById('close')
let list = document.getElementById('list')
let search = document.getElementById('search')
let searchClose = document.getElementById('search__close')
let searchBtn = document.getElementById('searchBtn')
let closeSection = document.querySelector('#menuCloseSection')

burger.addEventListener('click', () => {
    list.style.right = "0"
    document.body.style.overflow = 'hidden'
    closeSection.style.zIndex = '1'
    closeSection.style.opacity = '1'
})

close.addEventListener('click', () => {
    list.style.right = "-100%"
    document.body.style.overflow = 'auto'
    closeSection.style.zIndex = '-1'
    closeSection.style.opacity = '0'
})
closeSection.addEventListener('click', () => {
    list.style.right = "-100%"
    document.body.style.overflow = 'auto'
    closeSection.style.zIndex = '-1'
    closeSection.style.opacity = '0'
})

searchBtn.addEventListener('click', () => {
    searchClose.style.display = 'flex'
    search.style.display = 'flex'
    search.focus()
    searchBtn.style.display = 'none'
})

searchClose.addEventListener('click', () => {
    search.style.display = 'none'
    searchClose.style.display = 'none'
    search.value = ''
    searchBtn.style.display = 'flex'
})

let Data = [
    {
        img: "../images/products/1.png",
        id: '1',
    },
    {
        img: "../images/products/2.png",
        id: '2',
    },
    {
        img: "../images/products/3.png",
        id: '3',
    },
    {
        img: "../images/products/4.png",
        id: '4',
    },
    {
        img: "../images/products/5.png",
        id: '5',
    },
    {
        img: "../images/products/6.png",
        id: '6',
    },
    {
        img: "../images/products/7.png",
        id: '7',
    },
    {
        img: "../images/products/8.png",
        id: '8',
    },
    {
        img: "../images/products/9.png",
        id: '9',
    },
]
let cardBox = document.getElementById('cardBox')

Data.forEach((item, index) => {
    let a = document.createElement('div')
    a.classList.add('T-shirts__card')
    a.innerHTML =
        `
    <img src="${item.img}" alt="T-shirt image">
    <div class="card__modal">
        <button class="card__modal__btn">
            <img src="../images/products/likeBtn.png" alt="💜">
        </button>
        <button class="card__modal__btn">
            <img src="../images/products/shoppingBag.png" alt="👜">
        </button>
    `

    if (item.id > 8) {
        a.classList.add('T-shirt__hidden')
    }

    cardBox.appendChild(a)
})

let emailTester = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
let footerInp = document.querySelector('#footer-inp')
let form = document.getElementById('form')
let submit = document.getElementById('submit')

footerInp.addEventListener('input', () => {
    if (!footerInp.value.match(emailTester)) {
        submit.classList.remove('trueBtn')
    } else {
        submit.classList.add('trueBtn')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!footerInp.value.match(emailTester)) {
        footerInp.placeholder = 'Please enter your email'
        setTimeout(() => {
            footerInp.placeholder = 'Enter your email adress'
        }, 1500)
    } else {
        submit.textContent = 'Thanks'
        footerInp.value = null
        setTimeout(() => {
            submit.textContent = 'Submit'
        }, 2000)
        submit.classList.remove('trueBtn')
    }
})

const logBtn = document.getElementById('logBtn')
const sigBtn = document.getElementById('sigBtn')
const login = document.getElementById('login')
const signin = document.getElementById('signin')
let send = document.querySelectorAll('#send')
let modal = document.querySelector('.login__modal')
let user = document.querySelectorAll('.header__user')

send.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.transform = 'scale(0)'
    })
})

user.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.body.style.overflow = 'hidden'
        modal.style.transform = 'scale(1)'
    })
})

login.addEventListener('submit', function (e) {
    e.preventDefault()
    document.body.style.overflow = 'auto'
    
})
signin.addEventListener('submit', function (e) {
    e.preventDefault()
    document.body.style.overflow = 'auto'
})

logBtn.addEventListener('click', () => {
    login.classList.remove('hidden')
    signin.classList.add('hidden')
    logBtn.classList.add('log__active')
    sigBtn.classList.remove('log__active')
})

sigBtn.addEventListener('click', () => {
    sigBtn.classList.add('log__active')
    login.classList.add('hidden')
    signin.classList.remove('hidden')
    logBtn.classList.remove('log__active')
})