const form = document.getElementById("form");
const startdate = document.getElementById("startdate");
const enddate = document.getElementById("enddate");

function getDataFromApi(event) {
  // GBH
  // Used the new URL
  // let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io";
  // let url = "https://3ffc337b-df38-4f02-b3de-85e05e08e2e9.mock.pstmn.io";


  let url = "https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/";

  var settings = {
    // GBH
    // Used the new URL
    //  url: `${url}/transactions?startdate=${startdate}&enddate=${enddate}`,

    url: `${url}//transaction?startDate=2022-09-10&endDate=2022-10-10&category=food&description=coffee`,
    //url: `${url}/transactions`,
    method: "GET",
    timeout: 0,
    headers: {
      Accept: "application/json",
    },
  };

  var myArray = [];
  console.log("calling my new API");

  $.ajax(settings).done(function (response) {
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
