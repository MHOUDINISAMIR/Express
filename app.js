/* let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);
let myNewString = myArray.join(',');
console.log(myNewString); */

/* let dogNames = ["Rocket","Flash","Bella","Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger
console.log(dogNames) */

/*-----------------------------------------------------------------------------------------------------------------*/

 /*const moneySpent = [{ money : 100, name :'Samir'},
                      { money : 500, name :'Jack'},
                      {money : 200, name :'Nathan'}
                     ]
let somme = 0
for(let i=0; i<moneySpent.length; i++){
  let compte = moneySpent[i]
  somme += compte.money
}
console.log('la somme est :',somme)*/

/*----------------------------------------------------------------------------------------------------------------*/

/* const tab=[ ['Samir','Ismael'],
            ['Jack','Tona'],
            ['Lema','Nathan'],
            ['Lema','Tonton']
          ]
  
for(let i=0; i<tab.length; i++){
  for(let j=0; j<tab[i].length; j++){
    console.log(tab[i][j])
  }
} 
/* 

/*-----------------------------------------------------------------------------------------------------------------*/

/* for(let i=1; i<5; i++){
  console.log('First Loop ',i)
  for(let s=0; s<6; s++){
    console.log('Second Loop ', s)
  }
} */

/*----------------------------------------------------desincrimente-------------------------------------------------------------*/

/* const string='polfid'
let inverser = ""
for(let i=string.length -1; i>=0; i--){
  inverser += string[i]
}
  console.log(inverser)
 */
/* ----------------------------------------------------incrimente----------------------------------------------------------- */
  /* const string='polfid'
let inverser = ""
for(let i=0; i<string.length; i++){
  inverser = string[i] + inverser
}
  console.log(inverser)
 */

  /*------------------------------------------------table d'objet-------------------------------------------------------------- */

  /*const tab=[{age:32, name:'Idrisse'}, {age:30, name:'Hafez'}, {age:25, name:'Oncle'}, {age:32, name:'Bobocha'}, {age:23, name:'Samir'}]
  
for(let i=0; i<tab.length; i++){
  let obj = tab[i]
 
}
console.log('name :',`age ${pers.age}`) */

/*------------------------------------------------------------------------------------------------------------------*/

/*function renverser(str){
  console.log(str.split('').renverser().join(''))
}
console.log(SAMIR)*/

/* -----------------------------------------------------------------------------------------------------------------*/

/*function renverser(str){
  let inverser=str.split('').renverser().join('')
  if(str===inverser){
    console.log(true)
  }else{
    console.log(false)
  }
}
console.log()*/

/* -----------------------------------------------------------------------------------------------------------------*/

/*function renverser(num){
  console.log(num.toString().split('').renverser().join(''))
}
renverser(67)*/

/*-----------------------------------------------------------------------------------------------------------------*/

/*function renverser(num){
  let inverser=num.toString().split('').renverser().join('')
  if(num<0){
    return console.log(poinseInt(inverser)*-1)
  }else{
    console.log(inverser)
  }
}
renverser(-67)*/

/*--------------------------------------------Boucle of dans un objet-----------------------------------------------*/

/*const obj ={
  name:'SAMIR',
  age:23,
  birth:1998
}

for(let info of obj.name(obj)){
  console.log(obj[info])
}*/

/*----------------------------------------------Boucle for in dans les objets---------------------------------------*/

/*const obj={
  name:'samir',
  age:23
}
for(let info in obj){
  console.log(obj[info])
}*/
