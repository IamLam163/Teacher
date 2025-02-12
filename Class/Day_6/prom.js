// console.log("Start");

// setTimeout(() => {
//   console.log("This happens after 2 seconds");
// }, 1500);

// console.log("End");

//
// const fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data fetched successfully");
//   }, 1000);
// });

// fetchData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const myPromise = new Promise((resolve, reject) => {
  let success = false; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve("✅ Promise resolved!");
    } else {
      reject("❌ Promise rejected!");
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
