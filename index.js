// const descriptions = document.querySelectorAll('.description-display')
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;

//     if (content.length > 250) {
//         content = content.slice(250)
//         content = content + '<a href="#">...</a>';    
//     } 
//     desc.innerHTML = content;
//   }
  

//   const ratings = document.querySelectorAll(".rating-display .value");
//   for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
  
//     if (ratingValue > 4.7) {
//       rating.classList.add("high-rating");
//       rating.classList.remove("value");
//     }
//   }


// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;
// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");
// const header = document.querySelector("header");
// header.append(newElement);



// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});


// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked the name sorter");

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main element
  main.innerHTML = "";
  
  // 4. Create an array
  const parksArray = Array.from(parksList);
  
  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    console.log(parkAName)
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});


// Select the `ratingSorter` link
const ratingSorter = document.querySelector("#rating-sorter");
const stats = document.querySelectorAll(".rating-display > .value");

const ratingStats = Array.from(stats)
console.log(ratingStats)
ratingStats.forEach((stat) => {
  console.log(stat.innerText);
});

// Add an event listener
ratingSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked the rating sorter");

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main element
  main.innerHTML = "";
  


  // 4. Create an array
  const ratingStats = Array.from(stats)  

  // 5. Sort the array
  ratingStats.sort((ratingA, ratingB) => {
    const ratingAName = ratingA.querySelector("div").innerText;
    const ratingBName = ratingB.querySelector("div").innerText;
    
    console.log(ratingA)
    if (ratingAName < ratingBName) {
      return -1;
    } else if (ratingAName > ratingBName) {
      return 1;
    } else {
      return 0;
    }
  });
  
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});