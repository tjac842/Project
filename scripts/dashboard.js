const connect = document.getElementById("connect_btn");
const balance = document.getElementById("balance");


connect.addEventListener("click", async () => {
    fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/connect", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
        .then((response) => response.json())
        .then((data) => {
            return data || {};
          })
          .catch((error) => console.log(error));
});

//Balance
fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/balance")
  .then(response => response.json())
  .then(response => {
    res.data.map(user => {
      console.log(`$${balance}`)
    });
});

// balance.addEventListener("click", async () => {
//     fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/balance", {
//       method: "GET",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//     }).then((response) => response.json())
//     .then((data) => {
//                 return data || {};
//               })
//               .catch((error) => console.log(error));
//   });