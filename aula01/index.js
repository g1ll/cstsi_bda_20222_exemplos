// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, push, child, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB72qqrXePJCRK4JNEikCVFcAPmSQB_iTY",
	authDomain: "cstis-dba-5sem.firebaseapp.com",
	databaseURL: "https://cstis-dba-5sem-default-rtdb.firebaseio.com/",
	projectId: "cstis-dba-5sem",
	storageBucket: "cstis-dba-5sem.appspot.com",
	messagingSenderId: "998567264727",
	appId: "1:998567264727:web:baba282771c6de33868b92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rfDB = getDatabase();

const alunos = ref(rfDB, 'alunos')

// let nome = '';

// const new_aluno = {
// 	nome: "Fulano",
// 	idade: 24
// }

update(ref(rfDB,"alunos"),{
	nome: "Gill",
	matricula:89798798
}).then(()=>{
	console.log('Updated!')
	process.exit(0)	
})

// push(alunos,new_aluno).then(()=>{
// 	console.log("ok")
// 	process.exit();	
// })

// set(alunos, new_aluno)
// 	.then(function () {
// 		console.log("ok")
// 		process.exit()
// 	})
// 	.catch(erro=>console.log(erro))

// const fn = function (par){
//   return par*2
// }

// const fn2 = (par)=>{return par*2}

// const fn3 = par=>par*2

// const nodeRef = ref(rfDB,'alunos/-N6JnnM0BVEylCh6ewAm');
// const refIdade = child(nodeRef,'idade');

// set(refIdade,25).then(()=>{
// 		console.log("ok alterou!")
// 		process.exit(0);
// })

// set(ref(rfDB,'alunos/-N6JnnM0BVEylCh6ewAm/idade'),30).then(()=>{
// 		console.log("ok alterou!")
// 		process.exit(0);
// })





