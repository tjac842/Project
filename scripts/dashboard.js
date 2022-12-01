const connect = document.getElementById("connect_btn");
const balance = document.getElementById("balance");
const container = document.getElementById("dashboard_container");

connect.addEventListener("click", async () => {
  fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/connect", {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then(() => window.location.reload(true))
    .catch((error) => console.log(error));
});

//Balance
fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/balance", {
  method: "GET",
  mode: "cors",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((data) => {
    if (data !== undefined) {
      balance.innerHTML = `SGD $ ${data.Balance.toFixed(2)}`;
    }
  });

//Overview
fetch("https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/account/overview", {
  method: "GET",
  mode: "cors",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
})
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      data.map((cat) => {
        const catBox = document.createElement("div");

        if (cat.Target === 0) {
          catBox.className = "dashboard_cat_box";
        } else {
          const spent = cat.Sum / cat.Target;

          if (spent < 0.8) {
            catBox.className = "dashboard_healthy_cat_box";
          } else if (spent < 1.0) {
            catBox.className = "dashboard_danger_cat_box";
          } else {
            catBox.className = "dashboard_unhealthy_cat_box";
          }
        }

        const catTitle = document.createElement("div");
        catTitle.className = "cat_title";

        const title = document.createElement("p");
        title.appendChild(document.createTextNode(cat.Category));
        catTitle.appendChild(title);

        const value = document.createElement("p");
        value.appendChild(
          document.createTextNode(`$ ${cat.Sum} / ${cat.Target}`)
        );

        catTitle.appendChild(value);
        catBox.appendChild(catTitle);
        container.appendChild(catBox);
      });
    } else {
      container.appendChild(
        document
          .createElement("div")
          .appendChild(
            document.createTextNode(
              "Opps.. It's empty. Connect to your account to start."
            )
          )
      );
    }
  });
