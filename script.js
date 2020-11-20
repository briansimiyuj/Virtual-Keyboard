const caps = document.querySelector('.caps')

const texts = document.querySelectorAll('.text')

const textsBTN = document.querySelectorAll('.text button')

const buttons = document.querySelectorAll('button')

const textArea = document.querySelector('textArea')

const enter = document.querySelector('.enter') 

const check = document.querySelector('.check')

const space = document.querySelector('.space')

const wide = document.querySelector('#wide')

let inp = []

console.log(caps, texts, buttons, textArea, enter, check, space, wide, textsBTN)




caps.addEventListener('click', () =>{

    caps.classList.toggle('active')
    
    texts.forEach(text => {
        
        text.classList.toggle('active')

    })

})





textsBTN.forEach(text => {
    
    text.addEventListener('click', () =>{

       let tex = text.textContent

       inp += tex
      
       textArea.value = inp

    })

})