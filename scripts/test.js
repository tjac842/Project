const b = document.getElementById("getusers");

b.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/users", {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
});
