# Project Related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-paowkv?file=1-colorChanger%2Findex.html)

```javascript

console.log('Lokesh')

const buttons=document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
if(e.target.id === 'grey'){
  body.style.backgroundColor= e.target.id
}
if(e.target.id === 'blue'){
  body.style.backgroundColor= e.target.id
}
if(e.target.id === 'white'){
  body.style.backgroundColor= e.target.id
}
if(e.target.id === 'yellow'){
  body.style.backgroundColor= e.target.id
}
if(e.target.id === 'plum'){
  body.style.backgroundColor= e.target.id
}
if(e.target.id === 'green'){
  body.style.backgroundColor= e.target.id
}
  })
})

```