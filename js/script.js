// palindroma puo essere letta in entrambi i versi
//anna
//pippo non e palindroma

// let parola = 'anna';
// let parola = 'pippo';
// let parolaInversa = '';
// for (let i = 0; i < parola.length; i++) {
//   const lettera = parola[i];
//   parolaInversa = lettera + parolaInversa;
// }

// for (let i = parola.length - 1; i >= 0; i--) {
//   const lettera = parola[i];
//   parolaInversa += lettera;
// }

// function parolaPalindroma(parola) {
//   let parolaInversa = '';
//   for (let i = parola.length - 1; i >= 0; i--) {
//     const lettera = parola[i];
//     parolaInversa += lettera;
//   }

//   let palindroma = false;
//   //le due parole sono uguali?
//   if (parola == parolaInversa) {
//     palindroma = true;
//   }

//   return palindroma;
// }

// let parola = prompt('inserisci una parola');
// let palindromaCheck = parolaPalindroma(parola);
// let palindromaDue = parolaPalindroma('pippo');
// console.log(palindromaCheck, palindromaDue);

//-----------------------
// Scope
//-----------------------

// for (var index = 0; index < 10; index++) {
//   console.log(index);
// }

// if (index === 10) {
//   console.log(index);
// }


// // var num = 5; //dichiaro variabile

// function test() { //dichiaro la funzione
//   num = 10; // uso la variabile num che sta fuori
// }

// test(); //invoco la funzione
// console.log(num); //10


// a = 0;
// b = "buongiorno"
// var c = "ciao";

// saluta();

// console.log("a is " + a); //0
// console.log("b is " + b); //buongiorno

// function saluta() {
//   var d = "asd";
//   console.log("a is " + a); //0
//   var b = a + 1; //ridichiaro una variabile
//   console.log("b is " + b); //1
//   console.log(c); //ciao
// }


const array = [1, 2, 4];

for (var index = 0; index < array.length; index++) {
  const element = array[index];

}
console.log(index);
for (var index = 0; index < array.length; index++) {
  const element = array[index];
}