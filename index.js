
// //function show info
const showInfo = (date, confirmed, deaths, recovered) => {
    const info = document.createElement('div');
    info.style.width = '20vw';
    info.style.height = '22vh';
    info.style.border = '1px solid black';
    info.style.textAlign = 'center';
    info.style.color = 'black';
    info.style.backgroundColor = 'lightblue';
    info.innerHTML = `
    <h2 style="font-size:1.1rem;"> COVID-19 info for ${date}</h2>
    <br>    
    <table class="borders">
    <tr>
    <th>Confirmed</th>
    <th>Deaths</th>
    <th>Recovered</th>    
    </tr>
    <tr>
    <th>${confirmed}</th>
    <th>${deaths}</th>
    <th>${recovered}</th>    
    </tr>
    </table>    
    <br>
    <label for="date">Change Date :</label>
    <input type="date" id="date" name="date" style="background-color:lightyellow;">
    <button onclick="copy(document.getElementById('date').value)">Submit</button>  
    
    `   
    return info
}

//date for beginnig
var date = new Date('23 January 2020').toISOString().slice(0, 10);
console.log(date)



//function take value of input and change
function copy(input) {  
      
    this.date = input;    
    Remove(map)
    handleApi(iso3name, date)
}

//our html div
const map = document.querySelector('.infocards');


//Getting Coords and fill coords to attribute 

// function getMousePos(e) {
//   return {x:e.clientX,y:e.clientY};
// }
// map.onclick=function(e) {
//   var mousecoords = getMousePos(e);
//   console.log(mousecoords.x,mousecoords.y)
//   function FillCoords () {
//     var maps = document.getElementsByName ("worldmap");
//     var areas = maps[0].getElementsByTagName ("area");

//     for (var i = 0; i<areas.length; i++) {
//       areas[i].coords+=`${mousecoords.x},${mousecoords.y},`;
//       //  console.log(areas[i].coords);

//     } 

//     console.log(areas[12].coords);
//   }
//   FillCoords()

// };


//Take id with onclick area
var maps = document.getElementsByName("worldmap");
var areas = maps[0].getElementsByTagName("area");//html collection
const newareas = Array.from(areas)
// console.log(newareas)
newareas.forEach((area) => {
    area.addEventListener('click', () => {
        const areaId = area.id;//take id
        const iso3name = iso3names[areaId];//call iso3name as object
        // console.log(iso3name);
        Remove(map)
        handleApi(iso3name, date)
    });

})




//




//take api and call show info function

// console.log(id)
async function handleApi(iso3name, date) {
    try {
        const response = await fetch(`https://covidapi.info/api/v1/country/${iso3name}`)
        const res = await response.json();
        const results = res.result;

        const requiredDate = results[date]

        if (!requiredDate) {
            alert('Please input the correct Date')
            location.reload();
        }
        else {
            const confirmed = requiredDate.confirmed;
            const deaths = requiredDate.deaths;
            const recovered = requiredDate.recovered;
            // console.log(requiredDate);
            // console.log(confirmed, deaths, recovered);
            const newInfo = showInfo(date, confirmed, deaths, recovered)
            map.appendChild(newInfo)
        }

    }
    catch (err) {
        console.log(err)
    }
}



//function for remove all child

function Remove(item) {
    while (item.hasChildNodes()) {
        item.removeChild(item.lastChild)
    }
}


//object ISO3-Countries name
const iso3names =
{
    "p-8": "BOL",
    "p-4": "BRA",
    "p-14": "RUS",
    "p-22": "JPN",
    "p-6": "VEN",
    "p-11": "PRY",
    "p-7": "PER",
    "p-20": "PAK",
    "p-29": "POL",
    "p-33": "EGY",
    "p-27": "ITA",
    "p-35": "ETH",
    "p-19": "SAU",
    "p-26": "ESP",
    "p-21": "MNG",
    "p-3": "MEX",
    "p-25": "FRA",
    "p-34": "NER",
    "p-36": "NZL",
    "p-5": "COL",
    "p-15": "CHN",
    "p-10": "CHL",
    "p-2": "CAN",
    "p-17": "KAZ",
    "p-28": "DEU",
    "p-31": "DZA",
    "p-1": "USA",
    "p-24": "TUR",
    "p-32": "LBY",
    "p-18": "IRN",
    "p-9": "ARG",
    "p-13": "AUS",
    "p-16": "IND",
    "p-30": "AZE",
    "p-12": "IDN",
    "p-23": "UKR",
}