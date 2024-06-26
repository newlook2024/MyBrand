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

let heroImg = document.querySelectorAll('#hero-img')
let mainImg = document.querySelector('#m-hero-img')

heroImg.forEach((item, index) => {
    item.addEventListener('click', () => {
        mainImg.src = item.src
    })
})


let offerCardBox = document.getElementById('offerCardBox')
let offerCard = [
    {
        img: "../images/home/best/1.png",
        text: "Daradrpipara’s Content -  Bellazon ",
        id: 1
    },
    {
        img: "../images/home/best/2.png",
        text: "Daradrpipara’s Content -  Bellazon ",
        id: 2
    },
    {
        img: "../images/home/best/3.png",
        text: "Daradrpipara’s Content -  Bellazon ",
        id: 3
    },
    {
        img: "../images/home/best/4.png",
        text: "Daradrpipara’s Content -  Bellazon ",
        id: 4
    },
    {
        img: "../images/home/best/5.png",
        text: "Daradrpipara’s Content -  Bellazon ",
        id: 5
    },
    {
        img: "../images/home/best/6.png",
        text: "Daradrpipara’s Content -  Bellazon ",
        id: 6
    },
]

offerCard.forEach((item, index) => {
    let a = document.createElement('div')
    a.classList.add('best__card')
    a.innerHTML = `<a href='#' class='pointer'><img src="${item.img}" alt="rasm"> <p class="best__card__text">${item.text}</p></a>`
    if (item.id > 4) {
        a.classList.add('r__hidden')
    }
    offerCardBox.appendChild(a)
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
let required = document.querySelectorAll('.req')

send.forEach((item, index) => {
    item.addEventListener('click', () => {
        required.forEach((item1, index) => {
            if
                (required[0].value != '' & required[1].value != '' || required[2].value != '' & required[3].value != '' & required[4].value != '') {
                modal.style.transform = 'scale(0)'
                document.body.style.overflow = 'auto'
                item1.value = ''
            }
        })
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

