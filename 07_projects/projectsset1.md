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


## project 2 solution

```javascript

const form =document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')


  if(height === '' || height<0 || isNaN(height)){ // new method
    results.innerHTML= `Please give a valid height ${height}`;
  }
  if(weight === '' || weight<0 || isNaN(weight)){ // new method
    results.innerHTML= `Please give a valid weight ${weight}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML= `<span>${bmi}</span>`;
  }
});


```

```javascript

const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerText= date.toLocaleTimeString();
},1000)

```