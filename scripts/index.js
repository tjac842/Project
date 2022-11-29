// const getUserButton = document.getElementById("getuser");
const loginUser = document.getElementById("login");
const logoutUser = document.getElementById("logout");

//Get User
// getUserButton.addEventListener("click", async () => {
//   fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/user", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     mode: "cors",
//     credentials: "include",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return data || {};
//     })
//     .catch((error) => console.log(error));
// });

//User login
loginUser.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/login", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      return data || {};
    })
    .catch((error) => console.log(error));
});
  
logoutUser.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/logout", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    credentials: "include",
  })
    .then((response) => response.json())
});
  
  // b.addEventListener("click", async () => {
  //     fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/users", {
  //       method: "GET",
  //       mode: "cors",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //     }).then((response) => response.json());
  //   });
  