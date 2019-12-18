
// sparar id welcomeUser rad 142 i html
const welcomeUser = document.getElementById('welcomeUser');

// // sparar id profileDropdown rad 111
const dropDownUser = document.getElementById('profileDropdown');

// id cardTotalSales rad 251
const cardTotalSales = document.getElementById('cardTotalSales');

// cardTotalPurch rad 269
const cardTotalPurchases = document.getElementById('cardTotalPurch');

//  cardTotalOrders rad 287
const cardTotalOrders = document.getElementById('cardTotalOrders');

//  cardTotalGrowth rad 305
const cardTotalGrowth = document.getElementById('cardTotalGrowth');

//  dropDownMessages rad 25
const dropDownMessages = document.getElementById('dropDownMessages');

//   dropDownNotific rad 76
const dropDownNotifications = document.getElementById('dropDownNotific');

// rad 165   total users in world
const cardTotalUsersWorld = document.getElementById('cardTotalUsersWorld');

// '<canvas id="users-chart"></canvas>' rad 173
const cardTotUserWorldCanvas = document.getElementById('users-chart');

//   cardTotalProjWorld rad 180
const cardTotalProjectsWorld = document.getElementById('cardTotalProjWorld');

// <canvas id="projects-chart"></canvas> rad 188
const cardTotProjectsWorldCanvas = document.getElementById('projects-chart');

//  offlineProgress  rad 203
const cardDwnLOfflineCircle = document.getElementById('offlineProgress');

//  offlineProgressText rad 207
const cardOfflineProgressText = document.getElementById('offlineProgressText');


//  offlineProgress  rad 214
const cardDwnLOnlineCircle = document.getElementById('onlineProgress');

//  offlineProgressText rad 218
const cardOnlineProgressText = document.getElementById('onlineProgressText');

//   cardTotSaleChart rad 235
const cardTotSaleChartText = document.getElementById('cardTotSaleChart');

//  <canvas id="total-sales-chart"></canvas> rad 253
const cardtotalsaleschartCanvas = document.getElementById('total-sales-chart');


// text i button med id dropdownMenuDate1
const dropdownMenuDate1Button = document.getElementById('dropdownMenuDate1');
// cardTicketDropDownYear rad 347
const cardTicketsDropDownYear = document.getElementById('cardTicketDropDownYear');

//   cardTrTicketsContent rad 369
const cardTableTicketsContent = document.getElementById('cardTrTicketsContent');

//   cardUppdatesUlLi  rad 490
const cardUppdatesUlLi = document.getElementById('cardUppdatesUlLi');

//<canvas id="distribution-chart"></canvas>   rad 529
const carddistributionchartCanvas = document.getElementById('distribution-chart');

//canvas id="sale-report-chart"   sale-report-chart rad 544
const cardsalereportchartCanvas = document.getElementById('sale-report-chart');

//   SalesReportOverview
const cardSalesReportOverview = document.getElementById('SalesReportOverview');


// Open Invoices
const cardTablerowOpenInvoices = document.getElementById('cardTrOpenInvoices');



//*****   events ********  selectionchange  change  
//   dropdownMenuDate1  cardTicketDropDownYear
document.getElementById('cardTicketDropDownYear').addEventListener('click', changeTicketsBySelectYear);








//  
function setWelcomeUser(firstname, lastname) {
  // om data inte är .json() format får man ta text()
  fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then((data) => {

      welcomeUser.innerHTML = `Hi ${data}, Welcome back!`;
      dropDownUser.innerHTML = `<img src="https://via.placeholder.com/40x40" alt="profile"/>
  <span class="nav-profile-name">${data}</span>`;
    })
    .catch()
  // fel
  welcomeUser.innerHTML = `Hi No Name, Welcome back!`;
  dropDownUser.innerHTML = `<img src="https://via.placeholder.com/40x40" alt="profile"/>
  <span class="nav-profile-name">No Name</span>`;
}

// kallar på funktionen för att skriva till id="welcomeUser" och profileDropdown
setWelcomeUser('John', 'Doe');






// Messages
// div rad 23
// "from": "David Grey",
// "title": "The meeting is cancelled"
function setDropDownMess() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/messages`)
    .then(res => res.json())
    .then((data) => {
      // 
      // console.log(data[0].from)
      for (messages of data) {
        // console.log(messages)
        dropDownMessages.insertAdjacentHTML('afterbegin', `
    <a class="dropdown-item preview-item">
    <div class="preview-thumbnail">
      <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
    </div>
    <div class="preview-item-content flex-grow">
        <h6 class="preview-subject ellipsis font-weight-normal">${messages.from}</h6>
      <p class="font-weight-light small-text text-muted mb-0">${messages.title}</p>
    </div>
    </a>`)
      }
    })
    .catch()
}
// kallar på funktion för att visa meddelande i dropdownmeny
setDropDownMess();



// dropDownNotific
// "title": "Application Error",
// "subtitle": "Just now"

// class="preview-icon bg-success"
// class="preview-icon bg-warning"
// class="preview-icon bg-info"
//  <i class="mdi mdi-information mx-0"></i>
// <i class="mdi mdi-settings mx-0"></i>
// <i class="mdi mdi-account-box mx-0"></i>

function setdropDownNotific() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/notifications`)
    .then(res => res.json())
    .then((data) => {
      // 
      for (messages of data) {
        // console.log(messages)
        let icon = "mdi mdi-information mx-0";
        let iconclass = "preview-icon bg-info";
        if (messages.title === 'Application Error') {
          iconclass = "preview-icon bg-warning";
          icon = "mdi mdi-information mx-0";
        }
        if (messages.title === 'Settings') {
          iconclass = "preview-icon bg-info";
          icon = "mdi mdi-settings mx-0";
        }

        dropDownNotifications.insertAdjacentHTML('afterbegin', `
    <a class="dropdown-item preview-item">
      <div class="preview-thumbnail">
        <div class="${iconclass}">
          <i class="${icon}"></i>
        </div>
      </div>
      <div class="preview-item-content">
        <h6 class="preview-subject font-weight-normal">${messages.title}</h6>
          <p class="font-weight-light small-text mb-0 text-muted">${messages.subtitle}</p>
      </div>
    </a>`)
      }
    })
    .catch()
}

// kallar på funktion för att visa händelser i dropdownmeny
setdropDownNotific();





//    Total users world wide
// hämta data för Total users world wide och lägger till 
// 
function setTotalUsersWorld() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/total-users`)
    .then(res => res.json())
    .then((data) => {
      // 
      // skriver till html id cardTotalUsersWorld
      cardTotalUsersWorld.insertAdjacentHTML('afterbegin', `
    <h2 class="mr-3">${data.users}</h2>
    <i class="mdi mdi-arrow-up mr-1 text-danger"></i>
    <span><p class="mb-0 text-danger font-weight-medium">+${data.growth}%</p></span>
    `)

      // sparar värden för dataset som används i #users-chart
      // '<canvas id="users-chart"></canvas>' rad 173
      let datasetvalues = [];
      datasetvalues = data.dataset;
      // console.log(datasetvalues);
      // console.log(datasetvalues.data);
      // console.log(datasetvalues.labels);
      // cardTotUserWorldCanvas

      var areaData = {
        // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        // [16, 10, 22, 14, 18, 61, 12, 60, 190]
        labels: datasetvalues.labels,
        datasets: [{
          data: datasetvalues.data,
          backgroundColor: ['#e0fff4'],
          borderWidth: 2,
          borderColor: "#00c689",
          fill: 'origin',
          label: "purchases"
        }]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { filler: { propagate: false } },
        scales: {
          xAxes: [{
            display: false, ticks: { display: true },
            gridLines: {
              display: false, drawBorder: false, color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false, ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: { drawBorder: false }
          }]
        },
        legend: { display: false },
        tooltips: { enabled: true },
        elements: {
          line: { tension: .35 },
          point: { radius: 0 }
        }
      }

      let salesChart = new Chart(cardTotUserWorldCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    })
    .catch()
}
// kallar på funktionen
setTotalUsersWorld();
// 



//    Total cardTotalProjWorld  world wide
// hämta data för Total users world wide och lägger till 
// 
function setTotalProjectWorld() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/total-projects`)
    .then(res => res.json())
    .then((data) => {
      // 
      // skriver till html id cardTotalUsersWorld
      cardTotalProjWorld.insertAdjacentHTML('afterbegin', `
      <h2 class="mr-3">${data.projects}%</h2>
      <i class="mdi mdi-arrow-up mr-1 text-success"></i>
      <span><p class="mb-0 text-success font-weight-medium">+${data.growth}%</p></span>
    `)

      // sparar värden för dataset som används
      // <canvas id="projects-chart"></canvas> rad 188
      let datasetvalues = [];
      datasetvalues = data.dataset;
      // console.log(datasetvalues);
      // console.log(datasetvalues.data);
      // console.log(datasetvalues.labels);
      // 
      var areaData = {
        labels: datasetvalues.labels,
        datasets: [{
          data: datasetvalues.data,
          backgroundColor: ['#e5f2ff'],
          borderWidth: 2,
          borderColor: "#3da5f4",
          fill: 'origin',
          label: "purchases"
        }]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { filler: { propagate: false } },
        scales: {
          xAxes: [{
            display: false, ticks: { display: true },
            gridLines: {
              display: false, drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false, ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: { drawBorder: false }
          }]
        },
        legend: { display: false },
        tooltips: { enabled: true },
        elements: { line: { tension: .05 }, point: { radius: 0 } }
      }
      let salesChart = new Chart(cardTotProjectsWorldCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });

    })
    .catch()
}
// kallar på funktionen
setTotalProjectWorld();
// 



//   cardDwnLOfflineCircle  cardOfflineProgressText
//   cardDwnLOnlineCircle   cardOnlineProgressText
// "offlineAmount": 45324,
// "circleValue": 0.65
// "onlineAmount": 45324,
// "circleValue": 0.25
function setTotalDownloads() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/downloads`)
    .then(res => res.json())
    .then((data) => {
      //
      let offline = data[0];
      let online = data[1];
      // console.log(offline.offlineAmount);
      // console.log(offline.circleValue);
      // console.log(online.onlineAmount);

      // skriver ut text i cardOfflineProgressText
      cardOfflineProgressText.insertAdjacentText("afterbegin", `${offline.offlineAmount}`);
      // skriver ut text i cardOnlineProgressText
      cardOnlineProgressText.insertAdjacentText("afterbegin", `${online.onlineAmount}`);


      // Progress circle cardDwnLOfflineCircle
      var barOffline = new ProgressBar.Circle(cardDwnLOfflineCircle, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6, trailWidth: 6, easing: 'easeInOut', duration: 1400,
        text: {
          autoStyleContainer: true,
          style: { color: "#fff", position: 'absolute', left: '40%', top: '50%' }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e', width: 6
        },
        to: {
          color: '#f1536e', width: 6
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
        }
      });

      barOffline.text.style.fontSize = '1rem';
      barOffline.animate(offline.circleValue); //  .65 Number from 0.0 to 1.0

      //  progress circle online
      var barOnline = new ProgressBar.Circle(cardDwnLOnlineCircle, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6, trailWidth: 6, easing: 'easeInOut', duration: 1400,
        text: {
          autoStyleContainer: true,
          style: { color: "#fff", position: 'absolute', left: '40%', top: '50%' }
        },
        svgStyle: { width: '90%' },
        from: {
          color: '#fda006', width: 6
        },
        to: {
          color: '#fda006', width: 6
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }

        }
      });

      barOnline.text.style.fontSize = '1rem';
      barOnline.animate(online.circleValue); // Number from 0.0 to 1.0


    })
    .catch()
}
// // kallar på funktionen
setTotalDownloads();




//   cardTotSaleChartText
// cardtotalsaleschartCanvas
function setTotSaleChart() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales-chart`)
    .then(res => res.json())
    .then((data) => {
      // 


      // skriver ut text och data
      cardTotSaleChartText.insertAdjacentHTML('afterbegin', `
      <div class="mr-4 mr-md-5">
        <p class="mb-0">Revenue</p>
        <h4>${data.revenue}</h4>
      </div>
      <div class="mr-4 mr-md-5">
        <p class="mb-0">Returns</p>
        <h4>${data.returns}</h4>
      </div>
      <div class="mr-4 mr-md-5">
        <p class="mb-0">Queries</p>
        <h4>${data.queries}</h4>
      </div>
      <div class="mr-4 mr-md-5">
        <p class="mb-0">Invoices</p>
        <h4>${data.invoices}</h4>
      </div>`)


      //  visar data i canvas med Chart
      let datasetvalues = [];
      let datasetlabels = [];
      datasetlabels = data.labels;
      datasetvalues = data.datasets;

      // console.log(datasetlabels);  

      // console.log(datasetvalues[0].data);
      // console.log(datasetvalues[1].data);

      var areaData = {
        labels: datasetlabels,
        datasets: [
          {
            data: datasetvalues[0].data,
            backgroundColor: ['rgba(61, 165, 244, .0)'],
            borderColor: ['rgb(61, 165, 244)'],
            borderWidth: 2, fill: 'origin', label: "services"
          },
          {
            data: datasetvalues[1].data,
            backgroundColor: ['rgba(241, 83, 110, .0)'],
            borderColor: ['rgb(241, 83, 110)'],
            borderWidth: 2, fill: 'origin', label: "services"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { filler: { propagate: false } },
        scales: {
          xAxes: [{
            display: true,
            ticks: { display: true, padding: 20, fontColor: "#000", fontSize: 14 },
            gridLines: { display: false, drawBorder: false, color: 'transparent', zeroLineColor: '#eeeeee' }
          }],
          yAxes: [{
            display: true,
            ticks: {
              display: true, autoSkip: false, maxRotation: 0, stepSize: 100, fontColor: "#000",
              fontSize: 14,
              padding: 18,
              stepSize: 100000,
              callback: function (value) {
                var ranges = [
                  { divider: 1e6, suffix: 'M' },
                  { divider: 1e3, suffix: 'k' }
                ];
                function formatNumber(n) {
                  for (var i = 0; i < ranges.length; i++) {
                    if (n >= ranges[i].divider) {
                      return (n / ranges[i].divider).toString() + ranges[i].suffix;
                    }
                  }
                  return n;
                }
                return formatNumber(value);
              }
            },
            gridLines: { drawBorder: false }
          }]
        },
        legend: { display: false },
        tooltips: { enabled: true },
        elements: {
          line: { tension: .37 },
          point: { radius: 0 }
        }
      }
      // var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
      var revenueChart = new Chart(cardtotalsaleschartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
      // .getContext("2d")


    })
    .catch()
}
// kallar på funktion
setTotSaleChart();




//  funktion för att skriva till id xx då de har samma data
function setCardValue(id, url) {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      id.innerHTML = `${data.currency}${data.amount}`;
    })
    .catch()
}
// kallar på funktion för att skriva till id 
setCardValue(cardTotalSales, `https://inlupp-fa.azurewebsites.net/api/total-sales`);
setCardValue(cardTotalPurchases, `https://inlupp-fa.azurewebsites.net/api/total-purchases`);
setCardValue(cardTotalOrders, `https://inlupp-fa.azurewebsites.net/api/total-orders`);
setCardValue(cardTotalGrowth, `https://inlupp-fa.azurewebsites.net/api/total-growth`);
// 




// lägger till text i dropdownmeny "Tickets"
//  "year"
//  "tickets"
//  cardTicketsDropDownYear
function setTicketsDropDownYear() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/tickets`)
    .then(res => res.json())
    .then((data) => {
      // 

      // console.log(data.length);
      // console.log(data[0].year);

      // sätter text i knappen för dropdown, ska ändras när man har valt år.
      let latestYear = data[(data.length - 1)].year;
      dropdownMenuDate1Button.insertAdjacentText('afterbegin', `${latestYear}`)

      // lägg till årtal i dropdown
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i].year);
        //
        cardTicketsDropDownYear.insertAdjacentHTML('afterbegin',
         `<a class="dropdown-item" data-key="${i}"
         href="#cardTicketDropDownYear">${data[i].year}
         </a>`)
      }

    })
    .catch()
}
// kallar på funktion
setTicketsDropDownYear();




// lägg in tickets för det senaste året, visas som standard
//  "tickets"
function setTicketsByYear(selectedyear,datakey) {
  fetch(`https://inlupp-fa.azurewebsites.net/api/tickets`)
    .then(res => res.json())
    .then((data) => {
      //
      // rensar html i id
      cardTableTicketsContent.innerHTML = '';

        if (!selectedyear) {
          selectedyear = data[(data.length - 1)].year;
        } else {
          // 
        }
        // 
        // console.log(datakey);
        if (!datakey) {
          datakey = data.length - 1;
        } else {
          // 
        }

      // lägg till tickets i listan   data[(data.length - 1)].tickets.length
      for (let i = 0; i < data[datakey].tickets.length; i++) {
        //
        let fullName = (data[datakey].tickets[i].name);

        //  plocka första bokstaven i för/efter namn
        let nameArray = fullName.split(' ');
        // console.log(nameArray);  charAt(0) substring(0, 1)
        let userInitials = nameArray[0].charAt(0) + nameArray[1].charAt(0);

        let city = (data[datakey].tickets[i].city);

        // måste plocka ut tid ur date
        let dateTime = (data[datakey].tickets[i].date).split(',');

        let project = (data[datakey].tickets[i].project);

        let otherInfo = (data[datakey].tickets[i].other);

        // ändra class på class="icon-rounded-primary icon-rounded-md"
        let iconClassRounded = setClassIconTickets(otherInfo);
        // console.log(iconClassRounded);

        cardTableTicketsContent.insertAdjacentHTML('afterbegin', `
          <tr>
          <td class="pl-0">
          <div class="${iconClassRounded} icon-rounded-md">
            <h4 class="font-weight-medium">${userInitials}</h4>
          </div>
          </td>
          <td>
            <p class="mb-0">${fullName}</p>
            <p class="text-muted mb-0">${city}</p>
          </td>
          <td>
            <p class="mb-0">${dateTime[0]}</p>
            <p class="text-muted mb-0">${dateTime[1]}</p>
          </td>
          <td>
            <p class="mb-0">${project}</p>
            <p class="text-muted mb-0">${otherInfo}</p>
          </td>
          <td class="pr-0">
            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
          </td>
          </tr>`)
      }
    })
    .catch()
}
// kallar på funktion
setTicketsByYear();

function setClassIconTickets(data) {
  switch (data) {
    case "View on map":
      return "icon-rounded-primary";
      break;
    case "Start session":
      return "icon-rounded-info";
      break;
    case "End session":
      return "icon-rounded-danger";
      break;
    case "On Way":
      return "icon-rounded-warning";
      break;
    
    default:
      return "no-class";
      break;
  }
}

function changeTicketsBySelectYear(e) {

  // console.log(e.srcElement.innerText);
  // console.log(e.target);
  // console.log(e.target.getAttribute("data-key"));
  let datakey = e.target.getAttribute("data-key");
  let selectedyear = e.srcElement.innerText;

  dropdownMenuDate1Button.innerText = '';
  dropdownMenuDate1Button.insertAdjacentText('afterbegin', `${selectedyear}`)

  if (e.srcElement.innerText !== '') {
    let selectedyear = e.srcElement.innerText;
    setTicketsByYear(selectedyear,datakey);
  }

}



//   cardUppdatesUlLi
//   "time" "title" "message"
function setUppdatesUlLi() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/updates`)
    .then(res => res.json())
    .then((data) => {
      // 
      // console.log(data[0].from)
      for (uppdates of data) {
        // console.log(messages)
        cardUppdatesUlLi.insertAdjacentHTML('afterbegin', `
        <li>
          <h6>${uppdates.title}</h6>
          <p class="mt-2">${uppdates.message}</p>
          <p class="text-muted mb-4">
            <i class="mdi mdi-clock-outline"></i>
            ${uppdates.time}
          </p>
        </li>`)
      }
    })
    .catch()
}
// kallar på funktion
setUppdatesUlLi();




//   carddistributionchartCanvas
function setcarddistributionchart() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/distribution`)
    .then(res => res.json())
    .then((data) => {
      // 
      // console.log(data);


      let datasetlabels  = data.labels;
      let datasetdata = data.data;
      let datasetcities = data.cities;
      let datasetprocent = data.procentage;
      // console.log(datasetlabels);
      // console.log(datasetdata);
      // console.log(datasetcities);
      // console.log(datasetprocent);

      // skapa canvas

      var areaData = {
        labels: datasetlabels,
        datasets: [{
            data: datasetdata,
            backgroundColor: [
              "#3da5f4", "#f1536e", "#fda006"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="distribution-chart">');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
            text.push(`<p>${datasetcities[0]}</p>`);
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
            text.push(`<p>${datasetcities[1]}</p>`);
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
            text.push(`<p>${datasetcities[2]}</p>`);
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var distributionChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";
      
          var text = `${datasetprocent}%`,
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      // var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
      var distributionChart = new Chart(carddistributionchartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: distributionChartPlugins
      });
      document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();

        
      }
    )
    .catch()
}
// kallar på funktion
setcarddistributionchart();


//   cardsalereportchartCanvas
// 
function setcardsalesreportchart() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/sales-report`)
    .then(res => res.json())
    .then((data) => {
      
      // console.log(data.labels);
      let datasetvalues  = data;
      // console.log(datasetvalues);
      // console.log(datasetvalues.downloads);
      // let datasets = data.datasets;
      // console.log(data.labels);
      // console.log(data.datasets);
      // console.log(data.datasets[0].label);
      // console.log(data.datasets[0].data);
      // console.log(data.datasets[0].backgroundColor);

      // skapa canvas chart
      var CurrentChart = new Chart(cardsalereportchartCanvas, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
              label: `${data.datasets[0].label}`,
              data: data.datasets[0].data,
              backgroundColor: data.datasets[0].backgroundColor
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14,
                stepSize: 10000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .6,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
              barPercentage: .7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });

      // cardSalesReportOverview
      cardSalesReportOverview.innerHTML = `
        <div class="d-flex flex-wrap justify-content-start mt-3 mr-4">
          <div class="mr-3">
            <p class="mb-0">Downloads</p>
            <h4>${data.downloads}</h4>
          </div>
          <div class="mr-3">
            <p class="mb-0">Purchases</p>
            <h4>${data.purchases}</h4>
          </div>
          <div class="mr-3">
            <p class="mb-0">Users</p>
            <h4>${data.users}</h4>
          </div>
        </div>
        <div class="d-flex mb-3">
          <i class="mdi mdi-arrow-expand-up mb-0 text-success mr-2 mt-1"></i>
          <p class="mb-0 text-dark">${data.growth}</p>
        </div>`;


    })
    .catch()
}
// kallar på funktionen
setcardsalesreportchart();



//  cardTablerowOpenInvoices
function setTablerowOpenInvoices() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/open-invoices`)
    .then(res => res.json())
    .then((data) => {
      // 
      // console.log(data[0].from)
      for (invoices of data) {
        // ändra class på status badge-success badge-warning badge-danger
        let badgeClass = setClassForBadge(invoices.status);
        // console.log(badgeClass);

        // console.log(messages)
        cardTablerowOpenInvoices.insertAdjacentHTML('afterbegin', `
        <tr>
        <td>${invoices.invoice}</td>
        <td>${invoices.customer}</td>
        <td>${invoices.shipping}</td>
        <td class="font-weight-bold">${invoices.currency}${invoices.bestPrice}</td>
        <td>${invoices.currency}${invoices.purchasedPrice}</td>
        <td>
          <div class="badge ${badgeClass} badge-fw">${invoices.status}</div>
        </td>
      </tr>`)
      }
    })
    .catch()
}
// kallar på funktioner
setTablerowOpenInvoices();

// returnerar classnamn för badge
function setClassForBadge(status) {
  switch (status) {
    case "Progress":
      return "badge-info";
      // badge-success badge-primary badge-info
      break;
    case "Open":
      return "badge-warning";
      break;
    case "On hold":
      return "badge-danger";
      break;
    case "Closed":
      return "badge-success";
      break;

    default:
      return "no-class";
      break;
  }

}

