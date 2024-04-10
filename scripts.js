/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// Helpful sites...
// w3schools.com
// developer.mozilla.org
// stackoverflow.com


const data = [
    {
      "last_name, first_name": "Kwan, Steven",
      "player_id": 680757,
      "team": "Guardians",
      "attempts": 34,
      "avg_hit_angle": 13.1,
      "anglesweetspotpercent": 44.1,
      "max_hit_speed": 103.2,
      "avg_hit_speed": 87.2,
      "ev50": 96.3,
      "fbld": 89.3,
      "gb": 84.5,
      "max_distance": 424,
      "avg_distance": 163,
      "avg_hr_distance": 424,
      "ev95plus": 7,
      "ev95percent": 20.6,
      "barrels": 1,
      "brl_percent": 2.9,
      "brl_pa": 2.5
    },
    {
      "last_name, first_name": "Arenado, Nolan",
      "player_id": 571448,
      "team": "Cardinals",
      "attempts": 32,
      "avg_hit_angle": 13.6,
      "anglesweetspotpercent": 31.3,
      "max_hit_speed": 104.1,
      "avg_hit_speed": 84.3,
      "ev50": 95.7,
      "fbld": 84.9,
      "gb": 84.4,
      "max_distance": 372,
      "avg_distance": 149,
      "avg_hr_distance": null,
      "ev95plus": 8,
      "ev95percent": 25,
      "barrels": 0,
      "brl_percent": 0,
      "brl_pa": 0
    },
    {
      "last_name, first_name": "Cronenworth, Jake",
      "player_id": 630105,
      "team": "Padres",
      "attempts": 31,
      "avg_hit_angle": 12.3,
      "anglesweetspotpercent": 45.2,
      "max_hit_speed": 109.7,
      "avg_hit_speed": 89.9,
      "ev50": 103.2,
      "fbld": 95.5,
      "gb": 85.8,
      "max_distance": 384,
      "avg_distance": 177,
      "avg_hr_distance": null,
      "ev95plus": 17,
      "ev95percent": 54.8,
      "barrels": 5,
      "brl_percent": 16.1,
      "brl_pa": 12.8
    },
    {
      "last_name, first_name": "Ohtani, Shohei",
      "player_id": 660271,
      "team": "Dodgers",
      "attempts": 29,
      "avg_hit_angle": 9.2,
      "anglesweetspotpercent": 44.8,
      "max_hit_speed": 115.8,
      "avg_hit_speed": 92.5,
      "ev50": 104.4,
      "fbld": 97,
      "gb": 85.4,
      "max_distance": 430,
      "avg_distance": 184,
      "avg_hr_distance": 430,
      "ev95plus": 14,
      "ev95percent": 48.3,
      "barrels": 4,
      "brl_percent": 13.8,
      "brl_pa": 9.8
    },
    {
      "last_name, first_name": "Bogaerts, Xander",
      "player_id": 593428,
      "team": "Padres",
      "attempts": 29,
      "avg_hit_angle": 13.3,
      "anglesweetspotpercent": 31,
      "max_hit_speed": 105.4,
      "avg_hit_speed": 82.9,
      "ev50": 95.2,
      "fbld": 84.5,
      "gb": 82.3,
      "max_distance": 318,
      "avg_distance": 121,
      "avg_hr_distance": null,
      "ev95plus": 7,
      "ev95percent": 24.1,
      "barrels": 0,
      "brl_percent": 0,
      "brl_pa": 0
    },
    {
      "last_name, first_name": "Campusano, Luis",
      "player_id": 669134,
      "team": "Padres",
      "attempts": 29,
      "avg_hit_angle": 5.4,
      "anglesweetspotpercent": 31,
      "max_hit_speed": 110.1,
      "avg_hit_speed": 83.3,
      "ev50": 96.3,
      "fbld": 87.1,
      "gb": 81.9,
      "max_distance": 359,
      "avg_distance": 137,
      "avg_hr_distance": 329,
      "ev95plus": 7,
      "ev95percent": 24.1,
      "barrels": 1,
      "brl_percent": 3.4,
      "brl_pa": 3.3
    },
    {
      "last_name, first_name": "Betts, Mookie",
      "player_id": 605141,
      "team": "Dodgers",
      "attempts": 29,
      "avg_hit_angle": 22.2,
      "anglesweetspotpercent": 51.7,
      "max_hit_speed": 105.1,
      "avg_hit_speed": 93.9,
      "ev50": 99.9,
      "fbld": 94,
      "gb": 94.6,
      "max_distance": 407,
      "avg_distance": 255,
      "avg_hr_distance": 399,
      "ev95plus": 16,
      "ev95percent": 55.2,
      "barrels": 4,
      "brl_percent": 13.8,
      "brl_pa": 9.5
    },
    {
      "last_name, first_name": "Kim, Ha-Seong",
      "player_id": 673490,
      "team": "Padres",
      "attempts": 28,
      "avg_hit_angle": 15.1,
      "anglesweetspotpercent": 42.9,
      "max_hit_speed": 107.1,
      "avg_hit_speed": 88,
      "ev50": 98.5,
      "fbld": 92.2,
      "gb": 87,
      "max_distance": 374,
      "avg_distance": 171,
      "avg_hr_distance": 357,
      "ev95plus": 11,
      "ev95percent": 39.3,
      "barrels": 3,
      "brl_percent": 10.7,
      "brl_pa": 7.7
    },
    {
      "last_name, first_name": "Tatis Jr., Fernando",
      "player_id": 665487,
      "team": "Padres",
      "attempts": 28,
      "avg_hit_angle": 15.8,
      "anglesweetspotpercent": 32.1,
      "max_hit_speed": 116.7,
      "avg_hit_speed": 91.5,
      "ev50": 104.3,
      "fbld": 100.3,
      "gb": 85.8,
      "max_distance": 443,
      "avg_distance": 176,
      "avg_hr_distance": 415,
      "ev95plus": 13,
      "ev95percent": 46.4,
      "barrels": 4,
      "brl_percent": 14.3,
      "brl_pa": 10.8
    },
    {
      "last_name, first_name": "Burger, Jake",
      "player_id": 669394,
      "team": "Marlins",
      "attempts": 28,
      "avg_hit_angle": 11.2,
      "anglesweetspotpercent": 25,
      "max_hit_speed": 112.9,
      "avg_hit_speed": 89.7,
      "ev50": 103.9,
      "fbld": 94.6,
      "gb": 87.7,
      "max_distance": 403,
      "avg_distance": 140,
      "avg_hr_distance": 401,
      "ev95plus": 12,
      "ev95percent": 42.9,
      "barrels": 4,
      "brl_percent": 14.3,
      "brl_pa": 11.4
    },
    {
      "last_name, first_name": "Hayes, Ke'Bryan",
      "player_id": 663647,
      "team": "Pirates",
      "attempts": 28,
      "avg_hit_angle": -5,
      "anglesweetspotpercent": 21.4,
      "max_hit_speed": 110.4,
      "avg_hit_speed": 85.2,
      "ev50": 98.4,
      "fbld": 88.8,
      "gb": 84.3,
      "max_distance": 356,
      "avg_distance": 92,
      "avg_hr_distance": null,
      "ev95plus": 9,
      "ev95percent": 32.1,
      "barrels": 0,
      "brl_percent": 0,
      "brl_pa": 0
    },
    {
      "last_name, first_name": "Machado, Manny",
      "player_id": 592518,
      "team": "Padres",
      "attempts": 28,
      "avg_hit_angle": 4,
      "anglesweetspotpercent": 25,
      "max_hit_speed": 108.6,
      "avg_hit_speed": 87.7,
      "ev50": 101,
      "fbld": 97.4,
      "gb": 86.3,
      "max_distance": 398,
      "avg_distance": 130,
      "avg_hr_distance": 397,
      "ev95plus": 12,
      "ev95percent": 42.9,
      "barrels": 3,
      "brl_percent": 10.7,
      "brl_pa": 7.5
    },
    {
      "last_name, first_name": "Smith, Will",
      "player_id": 669257,
      "team": "Dodgers",
      "attempts": 27,
      "avg_hit_angle": 17.2,
      "anglesweetspotpercent": 37,
      "max_hit_speed": 105.2,
      "avg_hit_speed": 89,
      "ev50": 99,
      "fbld": 88.6,
      "gb": 93.9,
      "max_distance": 365,
      "avg_distance": 169,
      "avg_hr_distance": null,
      "ev95plus": 9,
      "ev95percent": 33.3,
      "barrels": 1,
      "brl_percent": 3.7,
      "brl_pa": 2.8
    },
    {
      "last_name, first_name": "Gurriel Jr., Lourdes",
      "player_id": 666971,
      "team": "D-backs",
      "attempts": 26,
      "avg_hit_angle": 20.3,
      "anglesweetspotpercent": 42.3,
      "max_hit_speed": 109.4,
      "avg_hit_speed": 92.4,
      "ev50": 103.9,
      "fbld": 97.4,
      "gb": 91.1,
      "max_distance": 414,
      "avg_distance": 211,
      "avg_hr_distance": 399,
      "ev95plus": 14,
      "ev95percent": 53.8,
      "barrels": 4,
      "brl_percent": 15.4,
      "brl_pa": 12.1
    },
    {
      "last_name, first_name": "Marte, Ketel",
      "player_id": 606466,
      "team": "D-backs",
      "attempts": 26,
      "avg_hit_angle": 4.1,
      "anglesweetspotpercent": 30.8,
      "max_hit_speed": 112.4,
      "avg_hit_speed": 94.6,
      "ev50": 104.2,
      "fbld": 98.7,
      "gb": 94.3,
      "max_distance": 433,
      "avg_distance": 142,
      "avg_hr_distance": 433,
      "ev95plus": 14,
      "ev95percent": 53.8,
      "barrels": 1,
      "brl_percent": 3.8,
      "brl_pa": 2.9
    },
    {
      "last_name, first_name": "Arraez, Luis",
      "player_id": 650333,
      "team": "Marlins",
      "attempts": 26,
      "avg_hit_angle": 10.4,
      "anglesweetspotpercent": 42.3,
      "max_hit_speed": 97.9,
      "avg_hit_speed": 85.8,
      "ev50": 94,
      "fbld": 88.9,
      "gb": 83.4,
      "max_distance": 339,
      "avg_distance": 153,
      "avg_hr_distance": null,
      "ev95plus": 4,
      "ev95percent": 15.4,
      "barrels": 1,
      "brl_percent": 3.8,
      "brl_pa": 2.6
    },
    {
      "last_name, first_name": "Alvarez, Yordan",
      "player_id": 670541,
      "team": "Astros",
      "attempts": 26,
      "avg_hit_angle": 14.1,
      "anglesweetspotpercent": 30.8,
      "max_hit_speed": 112.3,
      "avg_hit_speed": 95.4,
      "ev50": 105.6,
      "fbld": 99.4,
      "gb": 89.1,
      "max_distance": 444,
      "avg_distance": 215,
      "avg_hr_distance": 433,
      "ev95plus": 13,
      "ev95percent": 50,
      "barrels": 6,
      "brl_percent": 23.1,
      "brl_pa": 18.8
    },
    {
      "last_name, first_name": "De La Cruz, Bryan",
      "player_id": 650559,
      "team": "Marlins",
      "attempts": 26,
      "avg_hit_angle": 14,
      "anglesweetspotpercent": 30.8,
      "max_hit_speed": 108.1,
      "avg_hit_speed": 86.5,
      "ev50": 101.3,
      "fbld": 93.8,
      "gb": 76,
      "max_distance": 399,
      "avg_distance": 186,
      "avg_hr_distance": 399,
      "ev95plus": 12,
      "ev95percent": 46.2,
      "barrels": 3,
      "brl_percent": 11.5,
      "brl_pa": 8.6
    },
    {
      "last_name, first_name": "Naylor, Josh",
      "player_id": 647304,
      "team": "Guardians",
      "attempts": 26,
      "avg_hit_angle": 18.2,
      "anglesweetspotpercent": 34.6,
      "max_hit_speed": 108.1,
      "avg_hit_speed": 89.7,
      "ev50": 99.7,
      "fbld": 91,
      "gb": 92.6,
      "max_distance": 438,
      "avg_distance": 155,
      "avg_hr_distance": 438,
      "ev95plus": 9,
      "ev95percent": 34.6,
      "barrels": 2,
      "brl_percent": 7.7,
      "brl_pa": 6.5
    },
    {
      "last_name, first_name": "Lee, Jung Hoo",
      "player_id": 808982,
      "team": "Giants",
      "attempts": 26,
      "avg_hit_angle": 4.7,
      "anglesweetspotpercent": 23.1,
      "max_hit_speed": 108.9,
      "avg_hit_speed": 95.2,
      "ev50": 101.8,
      "fbld": 96.8,
      "gb": 94.6,
      "max_distance": 406,
      "avg_distance": 157,
      "avg_hr_distance": 406,
      "ev95plus": 15,
      "ev95percent": 57.7,
      "barrels": 2,
      "brl_percent": 7.7,
      "brl_pa": 6.1
    },
    {
      "last_name, first_name": "Altuve, Jose",
      "player_id": 514888,
      "team": "Astros",
      "attempts": 25,
      "avg_hit_angle": 25.6,
      "anglesweetspotpercent": 44,
      "max_hit_speed": 105.4,
      "avg_hit_speed": 90.6,
      "ev50": 100.4,
      "fbld": 91.7,
      "gb": 90.4,
      "max_distance": 404,
      "avg_distance": 206,
      "avg_hr_distance": 378,
      "ev95plus": 10,
      "ev95percent": 40,
      "barrels": 4,
      "brl_percent": 16,
      "brl_pa": 12.5
    },
    {
      "last_name, first_name": "Soto, Juan",
      "player_id": 665742,
      "team": "Yankees",
      "attempts": 25,
      "avg_hit_angle": 6,
      "anglesweetspotpercent": 32,
      "max_hit_speed": 113.3,
      "avg_hit_speed": 95,
      "ev50": 104.4,
      "fbld": 98.3,
      "gb": 92.1,
      "max_distance": 365,
      "avg_distance": 147,
      "avg_hr_distance": 349,
      "ev95plus": 14,
      "ev95percent": 56,
      "barrels": 2,
      "brl_percent": 8,
      "brl_pa": 5.9
    },
    {
      "last_name, first_name": "Blackmon, Charlie",
      "player_id": 453568,
      "team": "Rockies",
      "attempts": 24,
      "avg_hit_angle": 11.2,
      "anglesweetspotpercent": 33.3,
      "max_hit_speed": 107.6,
      "avg_hit_speed": 90.9,
      "ev50": 100.7,
      "fbld": 95.2,
      "gb": 86.4,
      "max_distance": 396,
      "avg_distance": 173,
      "avg_hr_distance": null,
      "ev95plus": 12,
      "ev95percent": 50,
      "barrels": 3,
      "brl_percent": 12.5,
      "brl_pa": 12
    },
]

function populateTable(players)
{
    let tBody = document.getElementById("tbody");
    let noResult = document.getElementById("noResult");

    tBody.innerHTML = "";
    noResult.style.display = "none";

    if (players.length > 0)
    {
        for (let i = 0 ; i < players.length ; i++)
        { 
            // Create row and insert cells
            let row = tBody.insertRow(i);

            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);
            let c4 = row.insertCell(3);
            let c5 = row.insertCell(4);

            // Cell 1 config
            playerName = document.createElement("div");
            playerName.setAttribute("class", "playerName")
            playerName.innerText = players[i]["last_name, first_name"];

            teamName = document.createElement("div");
            teamName.setAttribute("class", "teamName");
            teamName.innerText = players[i]["team"];

            c1.appendChild(playerName);
            c1.appendChild(teamName);

            // Cell 2 config
            attempts = document.createElement("div");
            attempts.setAttribute("class", "attempts");
            attempts.innerText = players[i]["attempts"];

            c2.appendChild(attempts);
            
            // // Cell 3 config
            c3.innerText = players[i]["avg_hit_angle"].toFixed(1);

            // Cell 4 config
            avgExitVelo = document.createElement("div");
            maxExitVelo = document.createElement("div");

            avgExitVelo.innerText = "Avg: ";
            maxExitVelo.innerText = "Max: ";

            avgExitVeloVal = document.createElement("span");
            maxExitVeloVal = document.createElement("span");

            avgExitVeloVal.innerText = players[i]["avg_hit_speed"];
            maxExitVeloVal.innerText = players[i]["max_hit_speed"];

            avgExitVelo.appendChild(avgExitVeloVal);
            maxExitVelo.appendChild(maxExitVeloVal);

            c4.appendChild(avgExitVelo);
            c4.appendChild(maxExitVelo);
            
            // Cell 5 config
            avgDistance = document.createElement("div");
            maxDistance = document.createElement("div");

            avgDistance.innerText = "Avg: ";
            maxDistance.innerText = "Max: ";

            avgDistanceVal = document.createElement("span");
            maxDistanceVal = document.createElement("span");

            avgDistanceVal.innerText = players[i]["avg_distance"];
            maxDistanceVal.innerText = players[i]["max_distance"];

            avgDistance.appendChild(avgDistanceVal);
            maxDistance.appendChild(maxDistanceVal);

            c5.appendChild(avgDistance);
            c5.appendChild(maxDistance);
        }
    }
    else
    {
        noResult.style.display = "block";
    }
}

function search()
{
    searchBar = document.getElementById("searchBar");

    const filteredData = data.filter(function (player) {
        return player["last_name, first_name"].includes(searchBar.value) || player["team"].includes(searchBar.value);
    })

    populateTable(filteredData);
}



function onPageLoad()
{
    populateTable(data);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", onPageLoad);
