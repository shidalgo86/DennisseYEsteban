let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.FotoDeslizante')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.FotoDeslizante')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})