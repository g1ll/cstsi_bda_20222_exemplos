import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,push,child, update } from "firebase/database";

const firebaseConfig = {
	projectId: "cstis-dba-5sem",
	
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

// let newUserID = 1;
// let refNode = ref(db,`users/${newUserID}`);
// let newUserData = {
// 	email:"fulano@hotmail.com", username: "fulan"}
// set(refNode, newUserData)

// const newUser ={
//     email: "ciclano@email.com",
//     usarname: "cicrano"
// }

// push(ref(db,'users/'),newUser)

//SET vs PUSH
// set(ref(db,'users/'+2),{
//     email: "ciclano@email.com",
//     usarname: "Ciclano"
// })

// push(ref(db,'users/2'),{
//     id: 2,
//     email: "ciclano@email.com",
//     usarname: "Ciclano"
// })

//PROMISES
// set(ref(db,'users/'+4),{
//         email: "bart@simpsons.com",
//         username: "Bart"
//     }).then(()=>{
//       console.log("Registrado!")
//     })
//     .catch(error=>{
// 		console.log("Erro!?"+error)
// 	}).finally(()=>process.exit(0))

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

//UPDATE
update(ref(db,"users/4"),{
	username: "Bartolomeu",
}).then(()=>{
	console.log('Updated!')
	process.exit(0)	
})
