// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getDatabase,
	set, ref, push, child, update, onValue, onChildAdded, get
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDoKCPFh-w_qv91iOlxBX2Z67UXyMh7wac",
	authDomain: "aula-03-dba.firebaseapp.com",
	databaseURL: "https://aula-03-dba-default-rtdb.firebaseio.com",
	projectId: "aula-03-dba",
	storageBucket: "aula-03-dba.appspot.com",
	messagingSenderId: "309540810810",
	appId: "1:309540810810:web:fb0c1321540be7be158503"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rfDB = getDatabase();

const prodRef = ref(rfDB, 'produtos')
const mostrarProdutos = (snap) => {
	console.log(snap.val())
	// process.exit(0)
}

// onValue(prodRef,mostrarProdutos);
// console.log("Teste!!")

// onChildAdded(prodRef,mostrarProdutos);
const key = "-MwSw5Py6lS3F4RbEcZr";
const nodeRef = ref(rfDB, `produtos/${key}`);
// const refImportado = child(nodeRef, 'importado');
get(child(nodeRef,'importado')).then(snap =>{
	let importado = !snap.val();
	update(ref(rfDB, `produtos/${key}`), {
		importado: importado
	}).then(() => {
		console.log(importado);
		process.exit(0)
	})
})