var hoursOpen = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm' ]

var totalCookiesAllLocations = [];
var mainTotal = 0;
var Locations = [];
function createCookieStores(id, name, min, max, ave){
  this.id = id;
  this.name = name;
  this.min = min;
  this.max = max;
  this.ave = ave;
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  this.totalCustomers = 0;
  this.totalCookies = 0;
  this.hourlyCookieTotal = [];
};

function RandomNumber(min, max){
  return Math.random() * ((max + 1) - min) + min;
}

function makeCookies(){
  for(var i = 0; i < hoursOpen.length; i++){
    var HourlyCustomer = Math.floor(RandomNumber(this.min, this.max));
    var HourlyCookie = Math.floor(HourlyCustomer * 6.3)
    this.totalCookies += HourlyCookie;
    this.hourlyCookies.push(HourlyCookie + ' cookies');
    this.hourlyCookieTotal.push(HourlyCookie);
  }
  this.totalCookies += ' cookies';
  Locations.push(this.hourlyCookieTotal);
}

function renderHeader(){
  var tableRow = document.getElementById("heading-tr");
  var tableCell = document.createElement('th');
  tableCell.textContent = "Location";
  tableRow.appendChild(tableCell);
  for(var i = 0; i < hoursOpen.length; i++){
    tableCell = document.createElement('th');
    tableCell.textContent = hoursOpen[i];
    tableRow.appendChild(tableCell);
  }
  var tableCell = document.createElement('th');
  tableCell.textContent = 'Daily Location Total';
  tableRow.appendChild(tableCell);
}
function renderToSales(){
  var tableRow = document.getElementById(this.id);
  var tableCell = document.createElement('td');
  tableCell.textContent = this.name;
  tableRow.appendChild(tableCell);
  for(var i = 0; i < this.hourlyCookies.length; i++){
    tableCell = document.createElement('td');
    tableCell.textContent = this.hourlyCookies[i];
    tableRow.appendChild(tableCell);
  }
  var tableCell = document.createElement('td');
  tableCell.textContent = this.totalCookies;
  tableRow.appendChild(tableCell);
};

  function renderFooter(){
    var tableRow = document.getElementById('footer-tr');
    var tableCell = document.createElement('td');
    tableCell.textContent = 'Total';
    tableRow.appendChild(tableCell);
    for(var i = 0; i < totalCookiesAllLocations.length; i++){
      tableCell = document.createElement('td');
      tableCell.textContent = totalCookiesAllLocations[i];
      tableRow.appendChild(tableCell);
    }
    var tableCell = document.createElement('td');
    tableCell.textContent = mainTotal;
    tableRow.appendChild(tableCell);
  }

function calcTotalCookiesHourly(){
  for (var i = 0; i < hoursOpen.length; i++){
    var total = 0;
    for (var j = 0; j < Locations.length; j++){
      total += Locations[j][i];
    }
    totalCookiesAllLocations.push(total + ' cookies');
    mainTotal += total;
  }
    mainTotal += ' cookies';
    return totalCookiesAllLocations;
}
createCookieStores.prototype.makeCookies = makeCookies;
createCookieStores.prototype.renderToSales = renderToSales;

var seattle = new createCookieStores('seattle', 'Seattle', 23, 65, 6.3);
var tokyo = new createCookieStores('tokyo', 'Tokyo', 3, 24, 1.2);
var dubai = new createCookieStores('dubai', 'Dubai', 11, 38, 3.7);
var paris = new createCookieStores('paris', 'Paris', 20, 38, 2.3);
var lima = new createCookieStores('lima', 'Lima', 2, 16, 4.6);
renderHeader();
seattle.makeCookies();
tokyo.makeCookies();
dubai.makeCookies();
paris.makeCookies();
lima.makeCookies();
seattle.renderToSales();
tokyo.renderToSales();
dubai.renderToSales();
paris.renderToSales();
lima.renderToSales();
calcTotalCookiesHourly()
renderFooter();