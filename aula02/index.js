import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push, child} from "firebase/database";

const firebaseConfig = {
//INSIRA A CONFIGURAÇÃO DO SEU PROJETO
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// const newUser ={
//     email: "beltrano@email.com",
//     usarname: "b3ltr0n"
// }
// push(ref(db,'users/'),newUser)

// let newUserID = 1;
// let refNode = ref(db,`users/${newUserID}`);
// let newUserData = {email:"fulano@gmail.com", username: "fulaninho"}
// set(refNode, newUserData)

//SET vs PUSH
// set(ref(db,'users/'+2),{
//     email: "ciclano@email.com",
//     usarname: "Ciclano"
// })

// push(ref(db,'users/+2'),{
//     id: 2,
//     email: "ciclano@email.com",
//     usarname: "Ciclano"
// })

//PROMISES
// set(ref(db,'users/'+3),{
//         email: "homer@simpsons.com",
//         username: "Homer"
//     }).then(()=>{
//       console.log("Registro alterado!")
//       process.exit(0)
//     })
//     .catch(error=>console.log("Erro!?"+error))

// push(ref(db,'users/'),{
//   email: "lisa@simpsons.com",
//   username: "lisajazz"
// }).then(ref=>{
//   console.log("Registro Inserido!");
//   process.exit(0)
// }).catch(error=>console.log("Erro!?"+error))

//CHILD
// const refNode = ref(db, 'users/3');
// const refAttr = child(refNode,'username');
// set(refAttr,"Homero")
//   .then(()=>{
//     console.log("Nome alterado!!")
//     process.exit(0)
//   })
//   .catch(error=>console.log("Erro!?"+error))