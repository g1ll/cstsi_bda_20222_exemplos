import { initializeApp } from "firebase/app";
// import {getDatabase, get, ref, child, onValue, onChildAdded} from "firebase/database"
import * as fb from "firebase/database"

//banco produtos
const firebaseConfig = {
    //COLOQUE AQUI AS CONFIGURAÇÕES PARA O SEU APP E DO SEU PROJETO FIREBASE
    apiKey: "AIzaSyDlj_bA7-JcsIEepaedx4tC6Jpm7Vzi4uU",
    authDomain: "cstsi-dba-aula04.firebaseapp.com",
    databaseURL: "https://cstsi-dba-aula04-default-rtdb.firebaseio.com",
    projectId: "cstsi-dba-aula04",
    storageBucket: "cstsi-dba-aula04.appspot.com",
    messagingSenderId: "936919812650",
    appId: "1:936919812650:web:9ef374359e73a0b5f91153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = fb.getDatabase(app);


let total; //usado para os exemplos com todos os filtros
total = 3; //usado para os filtros limitToFirst e limitToLast, comentar para os demais
const value = 4500;
const filtro = 'preco';
const produtos = [];

const refDB = fb.ref(db, 'produtos/');
//Descomente cada filtro por vez para testar
// const consulta = fb.query(refDB, fb.orderByChild(filtro), fb.limitToFirst(total))
// const consulta = fb.query(refDB,fb.orderByChild(filtro),fb.limitToLast(total))
// const consulta = fb.query(refDB,fb.orderByChild(filtro),fb.startAt(value))
// const consulta = fb.query(refDB,fb.orderByChild(filtro),fb.startAfter(value))
// const consulta = fb.query(refDB,fb.orderByChild(filtro),fb.endAt(value))
// const consulta = fb.query(refDB,fb.orderByChild(filtro),fb.endBefore(value))
// const consulta = fb.query(refDB,fb.orderByChild(filtro),fb.equalTo(value))
// const consulta = fb.query(refDB,fb.orderByChild('nome'),fb.equalTo('SSD 4TB'))
// const consulta = fb.query(refDB,fb.orderByChild('preco'))

// fb.onValue(consulta, snap => total =  (snap.exists())?Object.entries(snap.val()).length:0)
// if ternário: (flag)?true:false;
fb.onValue(consulta, (snap) => {
    if (snap.exists()) {
        total = Object.entries(snap.val()).length;
    } else {
        total = 0;
    }
})

fb.onChildAdded(consulta, (snap) => {//executa a cada disparo do evento child_added
 produtos.push([snap.key, snap.val()])
})

setInterval(() => {//executa a cada 1 segundo para monitorar o array produtos
    if (produtos.length === total) {
        console.table(Object.fromEntries(produtos))
        process.exit(0);
    }
}, 1000)
