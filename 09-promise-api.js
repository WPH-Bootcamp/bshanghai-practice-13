// promise.all => iterable biasanya digunakan ketika sebuah halaman web memanggil lebih dari 1 sumber data
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("berhasil");
  }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("gagal 2");
  }, 1000);
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("berhasil 3");
  }, 1000);
});

let promiseAll = Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Promise.allSettled, mirip dengan all tapi beda error handling
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Result A"), 1000)
);
const promiseB = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error in B"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Result C"), 3000)
);
Promise.allSettled([promiseA, promiseB, promiseC]).then((results) =>
  console.log("Promise.allSettled:", results)
);

// 3. Promise.race
const promiseX = new Promise((resolve) =>
  setTimeout(() => resolve("Result X"), 3000)
);
const promiseY = new Promise((resolve) =>
  setTimeout(() => resolve("Result Y"), 2000)
);
const promiseZ = new Promise((resolve) =>
  setTimeout(() => resolve("Result Z"), 1000)
);

Promise.race([promiseX, promiseY, promiseZ]).then((result) =>
  console.log("Promise.race:", result)
);

// 4. Promise.any
const promiseM = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error M"), 1000)
);
const promiseN = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error N"), 2000)
);
const promiseO = new Promise((resolve) =>
  setTimeout(() => resolve("Result O"), 3000)
);

Promise.any([promiseM, promiseN, promiseO])
  .then((result) => console.log("Promise.any:", result))
  .catch((error) => console.error("Promise.any Error:", error));

const promise_1 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error 1"), 1000)
);
const promise_2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error 2"), 2000)
);
const promise_3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error 3"), 3000)
);

Promise.any([promise_1, promise_2, promise_3])
  .then((result) => console.log("Promise.any:", result))
  .catch((error) => {
    // Akan menghasilkan error bertipe AggregateError karena semua promise gagal,
    // AggregateError berisi array error ['Error 1', 'Error 2', 'Error 3']
    console.error("Promise.any Error:", error);
  });

// 5. Promise.resolve
const resolvedPromise = Promise.resolve("Promise sudah terpenuhi");

resolvedPromise.then((result) => console.log("Promise.resolve:", result));
// 6. Promise.reject
const rejectedPromise = Promise.reject("Promise ditolak");

rejectedPromise.catch((error) => console.error("Promise.reject:", error));
