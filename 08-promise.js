let promise = new Promise((resolve, reject) => {
  // code untuk menghasilkan hasil
  // setelah async selesai, resolve | reject
});

let promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("berhasil");
  }, 1000);
});

promiseExample
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const data = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  function (response) {
    response.json().then(function (data) {
      console.log("Data yang didapat:", data);
    });
  }
);
