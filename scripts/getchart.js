// Create a pie chart showing expenses by category
// Chart derived from https://d3-graph-gallery.com/graph/pie_basic.html

const chartform = document.getElementById("chartform");
const startdate = document.getElementById("startdate");
const enddate = document.getElementById("enddate");

function buildUrl() {
  let url = `https://nus-course-backend-5i7iu7m5xa-uc.a.run.app/transaction/category?`;
  let isFirstParams = true;

  if (startdate.value !== "") {
    url += `startDate=${startdate.value}`;
    isFirstParams = false;
  }

  if (enddate.value !== "") {
    url += `${isFirstParams ? "" : "&"}endDate=${enddate.value}`;
    isFirstParams = false;
  }

  return url;
}

function transform(data) {
  let myPlotData = {};

  data.map((cat) => {
    myPlotData[cat["Category"]] = cat["Amount"];
  });

  return myPlotData;
}

function getCategoriesFromApi(event) {
  var settings = {
    url: buildUrl(),
    method: "GET",
    timeout: 0,
    headers: {
      Accept: "application/json",
    },
    xhrFields: {
      withCredentials: true,
    },
  };

  // call API
  $.ajax(settings).done(function (response) {
    myPlotData = transform(response);
    buildChart(myPlotData);
    buildLegend(response);
  });

  event.preventDefault();
}

function buildChart(data) {
  // remove existing svgs for re-rendering
  d3.selectAll("svg").remove();

  // set the dimensions and margins of the graph
  var width = 450;
  height = 450;
  margin = 40;

  // the radius of the pieplot is half the width or half the height
  var radius = Math.min(width, height) / 2 - margin;

  // append the svg object to the div called 'myChart'
  var svg = d3
    .select("#myChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // set the color scale
  var color = d3
    .scaleOrdinal()
    .domain(data)
    .range([
      "#111D4A",
      "#55C1FF",
      "#F9B5AC",
      "#DA3E52",
      "#987284",
      "#F85E00",
      "#3F0D12",
      "#DEF6CA",
      "#38369A",
    ]);

  // compute the position of each group on the pie:
  var pie = d3.pie().value(function (d) {
    return d.value;
  });

  var data_ready = pie(d3.entries(data));

  // build the pie chart: each part of the pie is a path that we build using the arc function
  svg
    .selectAll("whatever")
    .data(data_ready)
    .enter()
    .append("path")
    .attr("d", d3.arc().innerRadius(0).outerRadius(radius))
    .attr("fill", function (d) {
      return color(d.data.key);
    })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);
}

function buildLegend(data) {
  const legend = document.getElementById("myLegend");
  if (data !== undefined) {
    let table = document.getElementById("myLegendBody");
    let total = 0;
    table.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
                        <td>${data[i].Category}</td>
                        <td style="text-align:right;">${data[i].Amount}</td>
                  </tr>`;
      table.innerHTML += row;
      total += data[i].Amount;
    }

    let footer = `<tfoot style="height:100px;">
      <tr>
        <td>Sum</td>
        <td style="text-align:right;">${total.toFixed(2)}</td>
      </tr>
    </tfoot>`;

    let oldFooter = document.getElementsByTagName("tfoot");
    if (oldFooter.length > 0) {
      legend.removeChild(oldFooter[0]);
    }

    legend.innerHTML += footer;
    legend.style.display = "inline-block";
  }
}

chartform.addEventListener("submit", getCategoriesFromApi);
