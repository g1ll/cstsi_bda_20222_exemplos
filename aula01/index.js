import {assincrono} from "./assincrono.js"

console.log('revisao promisse!')

assincrono()
    .then(msg=>{
        console.log('then:'+msg)
    })
    .catch(msg=>console.log('error:'+msg))

try{
    console.log('await:'+(await assincrono())) //para o processo
}catch(e){
    console.log('error:'+e)
}

console.log('teste')