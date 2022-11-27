const add = {
  name: document.getElementById("food"),
  settings: "[{ \"Category\": \"Food\", \"Value\":200 }, 
  { \"Category\": \"Transport\", \"Value\":100 }, 
  { \"Category\": \"Utilities\", \"Value\":150 }, 
  { \"Category\": \"Shopping\", \"Value\":200 }, 
  { \"Category\": \"Misc\", \"Value\":100}]"

  };


function createPlanButton() {

    const food = document.getElementById("food");
    const transport = document.getElementById("transport");
    const utilities = document.getElementById("utilities");
    const shopping = document.getElementById("shopping");
    const misc = document.getElementById("misc");

    //https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/

    window.location.href = 'createPlanSuccess.html';
  }


const b = document.getElementById("getusers");
const c = document.getElementById("getuser");

b.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/users", {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
});



