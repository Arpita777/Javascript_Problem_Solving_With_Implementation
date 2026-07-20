//  Promise.all polyfill
Promise.myAll = function(promises){
    return new Promise((resolve,reject) => {
        let completed = 0;
        let result = [];
        if(promises.length === 0){
            return Promise.resolve([]);
        }
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
            .then((value) => {
                result[index] = value;
                comleted++;
                if(completed === promises.length){
                    resolve(result);
                }
            })
            .catch(reject)
        })
    })
}
//  Promise.allSettled polyfill
Promise.myAllSettled = function(promises){
    return new Promise((resolve,reject) => {
        let completed = 0;
        let result = [];
        if(promises.length === 0){
            return resolve([]);
        }
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
            .then((value) => {
                result[index] = {
                    status: 'fulfilled',
                    value
                };
            })
           .cath((reason) => {
               result[index] = {
                status: 'rejected',
                value
            }
           })
           .finally(() => {
              completed++;
              if(completed === 0){
                resolve(result);
              }
           })
        })
    })
}

//  Promise.any polyfill
Promise.myAny = function(promises){
    return new Promise((resolve,reject) => {
        let errors = [];
        let rejectCount = 0;
        if(promises.length === 0){
            return reject(new AggregateError(errors,"All Promises were rejected"));
        }
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
            .then(resolve)
            .catch((err) => {
                errors[index] = err;
                rejectedCount++;
                if(rejectCount === promises.length){
                    return reject(new AggregateError(errors,"All Promises were rejected"));
                }
            })
        })
    })
}

//  Promise.race polyfill
Promise.myRace = function(promises){
    return new Promise((resolve,reject) => {
        for(promise of promises){
            Promise.resolve(promise)
            .then(resolve)
            .catch(reject);
        }
    })
}
