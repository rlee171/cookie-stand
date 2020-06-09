var hoursOpen = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm' ]
// var Locations = [
//   {
//     id: 'seattle',
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     ave: 6.3,
//     hourlyCustomers: [],
//     hourlyCookies: [],
//     totalCustomers: 0,
//     totalCookies: 0,
//   },
//   {
//     id: 'tokyo',
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     ave: 1.2,
//     hourlyCustomers: [],
//     hourlyCookies: [],
//     totalCustomers: 0,
//     totalCookies: 0,
//   },
//   {
//     id: 'dubai',
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     ave: 3.7,
//     hourlyCustomers: [],
//     hourlyCookies: [],
//     totalCustomers: 0,
//     totalCookies: 0,
//   },
//   {
//     id: 'paris',
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     ave: 2.3,
//     hourlyCustomers: [],
//     hourlyCookies: [],
//     totalCustomers: 0,
//     totalCookies: 0,
//   },
//   lima = {
//     id: 'lima',
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     ave: 4.6,
//     hourlyCustomers: [],
//     hourlyCookies: [],
//     totalCustomers: 0,
//     totalCookies: 0,
//   },
// ]
// function calcHourlyCookies(){
//   for(var i = 0; i<hoursOpen.length; i++){
//     for(var j=0; j<Locations.length; j++){

//     }
//   }
// }
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
};

function RandomNumber(min, max){
  return Math.random() * ((max + 1) - min) + min;
}

function cookies(){
  for(var i = 0; i < hoursOpen.length; i++){
    var HourlyCustomer = Math.floor(RandomNumber(this.min, this.max));
    var HourlyCookie = Math.floor(HourlyCustomer * 6.3)
    this.totalCookies += HourlyCookie;
    this.hourlyCookies.push(hoursOpen[i] + ' ' + HourlyCookie + ' cookies');
  }
}

function renderToSales(){
    var parentOfSales = document.getElementById(this.id+'Sales-ul');
    var listSales = document.createElement('h1');
    listSales.textContent = this.name;
    parentOfSales.append(listSales)
  
    for(var i in this.hourlyCookies){
        listSales = document.createElement('li');
        listSales.textContent = this.hourlyCookies[i];
        parentOfSales.appendChild(listSales);
      }
    
  listSales = document.createElement('li');
  listSales.textContent = 'Total: ' + this.totalCookies
  parentOfSales.appendChild(listSales);

  var parentOfIndex = document.getElementById(this.id+'TableBody');
  var listIndex = document.createElement('td');
  listIndex.textContent = this.name;
  parentOfIndex.appendChild(listIndex);

  listIndex = document.createElement('td');
  listIndex.textContent = this.min;
  parentOfIndex.appendChild(listIndex);

  listIndex = document.createElement('td');
  listIndex.textContent = this.max;
  parentOfIndex.appendChild(listIndex);

  listIndex = document.createElement('td');
  listIndex.textContent = this.ave;
  parentOfIndex.appendChild(listIndex);
}
createCookieStores.prototype.cookies = cookies;
createCookieStores.prototype.renderToSales = renderToSales;

var seattle = new createCookieStores('seattle', 'Seattle', 23, 65, 6.3);
var tokyo = new createCookieStores('tokyo', 'Tokyo', 3, 24, 1.2);
var dubai = new createCookieStores('dubai', 'Dubai', 11, 38, 3.7);
var paris = new createCookieStores('paris', 'Paris', 20, 38, 2.3);
var lima = new createCookieStores('lima', 'Lima', 2, 16, 4.6);
seattle.cookies();
tokyo.cookies();
dubai.cookies();
paris.cookies();
lima.cookies();
seattle.renderToSales();
tokyo.renderToSales();
dubai.renderToSales();
paris.renderToSales();
lima.renderToSales();