const malesBtn = document.getElementById('maleBtn')
const males = document.querySelectorAll('.males')
const femalesBtn = document.getElementById('femalesBtn')
const females = document.querySelectorAll('.females')
const bothBtn = document.getElementById('bothBtn')
const both = document.querySelectorAll('.both')
const container = document.querySelector('.conatainer')


let state = '1'

malesBtn.addEventListener('click', ()=>{
    females.forEach(female => female.style.opacity = '0')
    both.forEach(female => female.style.opacity = '0')
    males.forEach(male => male.style.opacity = 1)
    state = state == '1' ? '0' : '1'
    container.style.height = '390px'
})

femalesBtn.addEventListener('click', ()=>{
    males.forEach(male => male.style.opacity = '0')
    both.forEach(female => female.style.opacity = '0')
    females.forEach(female => female.style.opacity = 1)
    state = state == '1' ? '0' : '1'
    container.style.height = '390px'
})

let height = '500px'


bothBtn.addEventListener('click', ()=>{
    males.forEach(male => male.style.opacity = '0')
    females.forEach(female => female.style.opacity = '0')
    both.forEach(both => both.style.opacity = 1)
    state = state == '1' ? '0' : '1'
    container.style.height = height
    height = height == '500px' ? '390px' :'500px'
})



