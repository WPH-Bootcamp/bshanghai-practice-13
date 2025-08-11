// async function f() {
//   return Promise.resolve(42);
// }

// f().then((result) => {
//   console.log(result);
// });

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("berhasil");
    }, 1000);
  });

  let result = await promise;

  console.log(result);
}

f();

// async didalam class

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter().wait().then((result) => {
  console.log(result);
});

// error handling
async function f1() {
  await Promise.reject("error");
}
// async function f1() {
//     throw new Error("error");
// }

async function f2() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

f2();
