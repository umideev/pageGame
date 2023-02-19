"use strict"
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

console.log(left)

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
    console.log(container)
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})



right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
    console.log(container)
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})

