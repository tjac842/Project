// For Login
// const b = document.getElementById("getusers");
// const c = document.getElementById("getuser");

b.addEventListener("click", async () => {
    fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/users", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => response.json());
  }); //test
  
  c.addEventListener("click", async () => {
    fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/user", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => response.json());
  });

  addEventListener("click", async () => {
    fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/login", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((response) => response.json());
  });
  
  // For Logout
  c.addEventListener("click", async () => {
      fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/logout", {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((response) => response.json());
  });
  
  // b.addEventListener("click", async () => {
  //     fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/users", {
  //       method: "GET",
  //       mode: "cors",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //     }).then((response) => response.json());
  //   });
  