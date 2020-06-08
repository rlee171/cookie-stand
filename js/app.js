var hoursOpen = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ' ]
var Locations = [
  seattle = {
    id: 'seattle',
    name: 'Seattle',
    min: 23,
    max: 65,
    ave: 6.3,
    hourlyCustomers: [],
    hourlyCookies: [],
    totalCustomers: 0,
    totalCookies: 0,
  },
  tokyo = {
    id: 'tokyo',
    name: 'Tokyo',
    min: 3,
    max: 24,
    ave: 1.2,
    hourlyCustomers: [],
    hourlyCookies: [],
    totalCustomers: 0,
    totalCookies: 0,
  },
  dubai = {
    id: 'dubai',
    name: 'Dubai',
    min: 11,
    max: 38,
    ave: 3.7,
    hourlyCustomers: [],
    hourlyCookies: [],
    totalCustomers: 0,
    totalCookies: 0,
  },
  paris = {
    id: 'paris',
    name: 'Paris',
    min: 20,
    max: 38,
    ave: 2.3,
    hourlyCustomers: [],
    hourlyCookies: [],
    totalCustomers: 0,
    totalCookies: 0,
  },
  lima = {
    id: 'lima',
    name: 'Lima',
    min: 2,
    max: 16,
    ave: 4.6,
    hourlyCustomers: [],
    hourlyCookies: [],
    totalCustomers: 0,
    totalCookies: 0,
  },
]

function RandomNumber(min,max){
  return Math.random() * ((max + 1) - min) + min;
}
function cookies(location){
for(var i = 0; i < 14; i++){
  var HourlyCustomer = Math.floor(RandomNumber(location.min, location.max));
  var HourlyCookie = Math.floor(HourlyCustomer * 6.3)
  location.totalCookies += HourlyCookie;
  // location.totalCustomers += HourlyCustomer;
  location.hourlyCookies.push(hoursOpen[i] + ' ' + HourlyCookie + ' cookies');
  // location.hourlyCustomers.push(hoursOpen[i] + ' ' + HourlyCustomer + 'customers');
}
}

function renderToSales(location){
  var parentOfSales = document.getElementById(location.id+'Sales-ul');
  parentOfSales.append(location.name)
  
  var listSales;
  
  for(var i in location.hourlyCookies){
    listSales = document.createElement('li');
    listSales.textContent = location.hourlyCookies[i];
    parentOfSales.appendChild(listSales);
  }
  
  listSales = document.createElement('li');
  listSales.textContent = 'Total: ' + location.totalCookies
  parentOfSales.appendChild(listSales);

}

function renderToIndex(location){
  var parentOfIndex = document.getElementById(location.id+'TableBody');
  var listIndex = document.createElement('td');
  listIndex.textContent = location.name;
  parentOfIndex.appendChild(listIndex);
  
  listIndex = document.createElement('td');
  listIndex.textContent = location.min;
  parentOfIndex.appendChild(listIndex);
  
  listIndex = document.createElement('td');
  listIndex.textContent = location.max;
  parentOfIndex.appendChild(listIndex);
  
  listIndex = document.createElement('td');
  listIndex.textContent = location.ave;
  parentOfIndex.appendChild(listIndex);

}


for(var i in Locations){
  cookies(Locations[i]);
  if(document.getElementById(Locations[i].id+'Sales-ul') !== null){
    renderToSales(Locations[i]);
  };
  if(document.getElementById(Locations[i].id+'TableBody') !== null){
    renderToIndex(Locations[i]);
  };
}
