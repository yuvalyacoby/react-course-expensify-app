const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Yuval',
    //   age: 30
    // });
    reject('Something went wrong!')
  }, 4000)
});

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ', error)
});

// promise.then((data) => {
//   console.log(data);
// }, (error) => {
//   console.log('error: ', error)
// });
