const caps = document.querySelector('.caps')

const texts = document.querySelectorAll('.text')

const buttons = document.querySelectorAll('button')

const textArea = document.querySelector('textArea')

const enter = document.querySelector('.enter') 

const check = document.querySelector('.check')

const space = document.querySelector('.space')

const wide = document.querySelector('#wide')

console.log(caps, texts, buttons, textArea, enter, check, space, wide)




caps.addEventListener('click', () =>{

    console.log('working')

    caps.classList.toggle('active')
    
    texts.forEach(text => {
        
        text.classList.toggle('active')

    })

})