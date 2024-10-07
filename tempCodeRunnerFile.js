function promiseAllSettled(promises){
    return new Promise((resolve) =>{
        const results = [];  
        let completedPromises = 0;  

        promises.forEach((promise, index) => {  
            Promise.resolve(promise)  
                .then(value => {  
                    results[index] = { status: 'fulfilled', value: value };  
                })  
                .catch(reason => {  
                    results[index] = { status: 'rejected', reason: reason };  
                })  
                .finally(() => {  
                    completedPromises++;  
                    if (completedPromises === promises.length) {  
                        resolve(results);  
                    }  
                });  
        });  
    });  
}  
 
const promise1 = Promise.resolve(3);  
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));  
const promise3 = Promise.resolve(42);  

promiseAllSettled([promise1, promise2, promise3])  
    .then(results => {  
        console.log(results);  
    });