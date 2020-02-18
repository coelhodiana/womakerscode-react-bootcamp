//Exemplo de Chaining (promises encadeadas)

function job1(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            reject('vish');
        }, 2000)
    })
}

function job2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('resolvida job2')
        }, 1000)
    })
}

const promise  = job1()

promise
.then(resposta => {
    console.log('RESP', resposta)
})


.then(respostaJob2 => {
    console.log('promise console', respostaJob2)
})
.catch(error => console.log('erro >>>>', error))