// try catch => ketika ada error, script tidak langsung end/mati

try {
  // code
} catch (error) {
  // code
}

// example 1 no error
try {
  console.log("mulai eksekusi");
  // no error
  console.log("eksekusi berhasil");
} catch (error) {
  // error
  console.log("ada error"); //pasti diabaikan
}

// example 2 terjadi eror

try {
  console.log("mulai eksekusi");
  // panggil variable yang tidak ada
  test123; //hanya berfungsi pada runtime error
  console.log("eksekusi berhasil");
} catch (error) {
  // error
  console.log("ada error: ", error); //pasti diabaikan
}

// example 3 bekerja secara sinkron
// try {
//   setTimeout(() => {
//     noVariable;
//   }, 1000);
// } catch (error) {
//   // error
//   console.log("ada error", error);
// }

// example 4 throw error

let json = '{"nickname": "kyra"}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new Error("invalid user data");
  }
  console.log(user.name);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// finally

try {
  // code
} catch (error) {
  // code
} finally {
  // code
}

try {
  console.log("try dimulai");
  //   noVar;
  console.log("try selesai");
} catch (error) {
  // code
  console.log("ada error");
} finally {
  // code
  console.log("finally selesai");
}
