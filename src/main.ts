import './style.css'
const input = document.querySelector('#input') //найти блок по id
input?.addEventListener('keyup', (event) =>{
  if(event.code === 'Enter'){
    console.log(event.target.value)
  }
  
})