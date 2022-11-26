const form = document.getElementById("form");
const startdate = document.getElementById("startdate");
const enddate = document.getElementById("enddate");

function getDataFromApi(event) {

  // GBH
  // To run from my Netlify: https://meek-snickerdoodle-4d6567.netlify.app/

  // GBH
  // This is the original URL. This works.
  // let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io";
  // This is my own POSTMAN URL. This works. (Make sure is JSON)
  // let url = "https://3ffc337b-df38-4f02-b3de-85e05e08e2e9.mock.pstmn.io";

  // This is Lex's production URL (same as POSTMAN I think)
  let url = "https://nus-course-backend-5i7iu7m5xa-uc.a.run.app";

  var settings = {
    // GBH
    // This is the original API. It works.
    // url: `${url}/transactions?startdate=${startdate}&enddate=${enddate}`,

    // This is my API using POSTMAN. It works.
    // url: `${url}/transactions`,

    // This is Lex's API. I just hardcode the param for now.
    // Error in console -- something about CORS.
    url: `${url}/transaction?startDate="2022-09-10"&endDate="2022-10-10"&category="food"&description="coffee"`,
    
    // I also tried with a simpler API. Also not working. Same CORS error.
    //url: `${url}/user`,

    method: "GET",
    timeout: 0,
    headers: {
      Accept: "application/json",
    },
  };

  var myArray = [];
  console.log("calling my new API");

  $.ajax(settings).done(function (response) {
    console.log("INSIDE");
    myArray = response;
    console.log(myArray);
    buildTable(myArray);
  });
  event.preventDefault();
}

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {

    var row = `<tr>
                      <td>${data[i].date}</td>
                      <td>${data[i].amount}</td>
                      <td>${data[i].category}</td>
                      <td>${data[i].description}</td>
                      <td>${data[i].account}</td>
                </tr>`;
    table.innerHTML += row;
  }
}

form.addEventListener("submit", getDataFromApi);
