// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.ZAPATITOS_API_KEY,
  authDomain: process.env.ZAPATITOS_AUTH_DOMAIN,
  projectId: process.env.ZAPATITOS_PROJECT_ID,
  storageBucket: process.env.ZAPATITOS_STORAGE_BUCKET,
  messagingSenderId: process.env.ZAPATITOS_MESSAGING_SENDER_ID,
  appId: process.env.ZAPATITOS_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// función declarativa
function ejemplo() {
  const numOne = 1;
  const numTwo = 2;
  const sum = numOne + numTwo;
  return sum
}

ejemplo();

(function() {
  const numOne = 1;
  const numTwo = 2;
  const sum = numOne + numTwo;
  return sum
})()

(
  function () {
    const numOne = 1;
    const numTwo = 2;
    const sum = numOne + numTwo;
    return sum
  }
)()



function callback() {
  console.log("Hola mundo")
}

// parametros
function saludar(callback) {
  // parametros
  callback();
}

// argumento
saludar(callback)

const promise = new Promise(
  (resolve, reject) => {
    // bloque de código
    // consumo un API
    resolve(null)
    reject(null)
  }
)

function getData(data) {
  console.log(data.json())
}

function onError(data) {
  console.log(data)
}

const getClima = new Promise(
  (resolve, reject) => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(getData)
    .catch(onError)

  }
)

const myPromise = new Promise(
  (resolve, reject) => {
    try {
      alert("Hola")
      resolve("Hola")
    } catch(error) {
      alert("error")
      reject("error")
    }
  }
)






















// función declarativa
// función de expresión
// IIFE
// Bloqueante y no bloqueante
// sincrono y asincrono
// polling o poll
// secuencial y entrelazado
// callback  (una función que 
// es pasada como parametro 
// en otra función)
// argumentos y parametros
// promesas





// Función declarativa
// función de expresión
// función flecha o arrow function
// callbacks
// Promesas
// eventos bloqueantes (sincronico)
// eventos no blqueantes (asincronico)
// javascript es mono hilo - multihilo
// polling
// Pilas y Colas
// timers (setTimeout, setImmediate)
// event loop