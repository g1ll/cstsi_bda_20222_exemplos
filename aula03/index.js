import { initializeApp } from "firebase/app";
// import {getDatabase, get, ref, child, onValue, onChildAdded} from "firebase/database"
import * as fb from "firebase/database"

const firebaseConfig = {
   //COLOQUE A CONFIGURAÇÃO DO SEU PROJETO
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = fb.getDatabase(app);


//ORDER BY KEY VS ORDER BY VALUE
const refDB = fb.ref(db,'produtos/-MwSzyJMlNDToTGtPuhc');
//const consulta = fb.query(refDB,fb.orderByKey()) //PADRAO POR CHAVE
const consulta = fb.query(refDB,fb.orderByValue()) //POR VALOR
fb.onChildAdded(consulta,(dados)=>{
     console.log(`key: ${dados.key} | value:${dados.val()}`);
})


//ORDER BY KEY
// const consulta = fb.query(refDB,fb.orderByKey())
// fb.onValue(consulta,(dados)=>{
//     let arrayDados = Object.entries(dados.val())
//     let inverso = Object.fromEntries(arrayDados.reverse())
//     console.table(inverso)
// })


//QUERY
// const consulta = fb.query(refDB,fb.orderByChild('id_prod'))
// fb.onChildAdded(consulta,(dados)=>{
//     console.log(dados.val())
// })


//CHILD CHANGED e OFF
// fb.onChildChanged(refDB,(snapshot)=>{ //()=>{}
//     if(snapshot.exists()){
//        console.log(snapshot.val())
//     }else{
//         console.log("Nó não encontrado")
//     }
//     if(snapshot.key == 4)
//         fb.off(refDB,'child_changed')
// });


//ONVALUE ONCE (CACHE: DADOS LOCAIS)
// fb.onValue(refDB,(snapshot)=>{ //()=>{}
//     if(snapshot.exists()){
//        console.log(snapshot.val())
//     }else{
//         console.log("Nó não encontrado")
//     }
//     // process.exit(0)
// },{
//     onlyOnce:true
// });


//CHILD
// fb.onChildAdded(refDB,(snapshot)=>{ //()=>{}
//     if(snapshot.exists()){
//        console.log(snapshot.val())
//     }else{
//         console.log("Nó não encontrado")
//     }
// });

//ONVALUE
// fb.onValue(refDB,(snapshot)=>{ //()=>{}
//     if(snapshot.exists()){
//        console.log(snapshot.val())
//     }else{
//         console.log("Nó não encontrado")
//     }
//     // process.exit(0)
// });

//SET
// const refNode = child(refDB,"users");

// get(refNode).then((snapshot)=>{
//     if(snapshot.exists()){
//         console.log(snapshot.val())
//     }else{
//         console.log("Nó não encontrado")
//     }
//     process.exit(0)
// }).catch((erro)=>{
//     console.log(erro)
//     process.exit(0)
// })




