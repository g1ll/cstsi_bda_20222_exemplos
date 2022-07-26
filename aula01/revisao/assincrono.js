let status = 'pendente';

const assincrono = ()=> new Promise((resolve,reject)=>{
        const delay = 1000

        const callback = ()=>{
            status='resolvido'
            resolve(status)
        }
        let rand = Math.random()
        setTimeout(()=>reject('rejeitado'),delay*rand)
        rand = Math.random()
        setTimeout(callback,delay*rand)

})



export {assincrono}