/*Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)*/
const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail';


const data=''
let emailList=''
//let ulEl =''
for (let i=0; i<10;i++){
    fetch(endPoint)
    .then(response => response.json())
    .then(data => 
        {
            
            console.log(data)
           
            emailList = data.response;

            /*let liEl = document.createElement('li');
            liEl.innerHTML = emailList
            ulEl.appendChild(liEl)*/
            //createList(emailList)
           clickCreatelist(emailList)
        })
 //  console.log(i);
     
}

//console.log(emailList);


const ulEl = document.querySelector('.list-group')

function createList(listaElementi){
    
    
    let liEl = document.createElement('li')
    liEl.innerHTML = listaElementi
    ulEl.appendChild(liEl)
}


function clickCreatelist (listaElementi){

const btnEl = document.getElementById('btn')
btnEl.addEventListener('click',function(e){
e.preventDefault()
//ulEl.appendChild('')
//ulEl.innerHTML =''
createList(listaElementi)
})

}
  /*  const markupString = "`${emailList}`"
    //console.log(markupString)

let liEl = document.createElement('li')

liEl.innerText = emailList
console.log(liEl);

ulEl.appendChild(liEl)*/



