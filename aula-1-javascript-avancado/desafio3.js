function job(data) {
    return new Promise((resolve, reject)=>{
        if(typeof data != 'number'){

            reject('error');
        
        } else if (data%2 !== 0){

            setTimeout((resolve('odd')), 1000);

        } else {

            setTimeout((resolve('even')), 2000);

        }
        
    })
}

// module.exports = job;

job(23)
// console.log(job(20));

.then(content => console.log(content))
.catch(error => console.log('error>>>>>>'))