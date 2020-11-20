const caps = document.querySelector('.caps')

const texts = document.querySelectorAll('.text')

const keyboard =  document.querySelector('.keyboard')

const textsBTN = document.querySelectorAll('.text button')

const buttons = document.querySelectorAll('button')

const textArea = document.querySelector('textArea')

const enter = document.querySelector('.enter') 

const check = document.querySelector('.check')

const space = document.querySelector('.space')

const wide = document.querySelector('#wide')

let inp = []

console.log(caps, texts, buttons, textArea, enter, check, space, wide, textsBTN, keyboard)




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




space.addEventListener('click', () =>{

    let blank = ' '

    inp += blank    
    
})




check.addEventListener('click', () =>{

    keyboard.classList.add('close')

})



textArea.addEventListener('click', () =>{

    keyboard.classList.add('open') 
    
})



wide.addEventListener('click', () =>{

   let backSpace = inp.substring(0, inp.length -1)  

   inp = backSpace
   
   textArea.value = inp
   
})




enter.addEventListener('click', () =>{

    let enter = inp.value += "\n"

    inp += enter

    console.log('working')

})