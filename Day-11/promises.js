function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data Fetch Successfully");
      } else {
        reject("Error Fetching Data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
