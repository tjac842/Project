const getUserButton = document.getElementById("getuser");
const addPlanButton = document.getElementById("addplan");
const getOverviewButton = document.getElementById("getoverview");

getUserButton.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/user", {
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

addPlanButton.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/Plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      name: "Escape Plan DDDDD",
      settings: '[{ "Category": "Utilities", "Value":0 }]',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data || {};
    })
    .catch((error) => console.log(error));
});

getOverviewButton.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/overview", {
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
