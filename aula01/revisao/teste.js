import {assincrono} from "./assincrono.js"

console.log('revisao!')

assincrono()
    .then(msg=>console.log(msg))
    .catch(msg=>console.log('error:'+msg))

try{
    console.log(await assincrono()) //para o processo
}catch(e){
    console.log('error:'+e)
}

console.log('teste')