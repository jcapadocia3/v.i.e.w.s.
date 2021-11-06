// module exports ?

const commentHandler = async (event) => {
  console.log("raddddddd!");
  // debugger;
  event.preventDefault();
  // document.location.replace('/home');

  const comment = document.querySelector("#commentInput").value.trim();

  if (comment) {
    // Send a POST request to the API endpoint
    const response = await fetch("/review", {
      method: "POST",
      body: JSON.stringify({ review: comment, mural_id: 1 }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log("comment submitted");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".commentSubmit").addEventListener("click", commentHandler);









// const ratingStars = [...document.getElementsByClassName("rating__star")];

// function executeRating(stars) {

//   const starClassActive = "rating__star fas fa-star";
//   const starClassInactive = "rating__star far fa-star";
//   const starsLength = stars.length;

//   let i;

//   stars.map((star) => {
//     star.onclick = () => {

//       i = stars.indexOf(star);

//       if (star.className===starClassInactive) {
//         for (i; i >= 0; --i) stars[i].className = starClassActive;
//         console.log([i]);
//       } else {
//         for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
//       }
//     };
//     console.log(i);
//   });
// }
// executeRating(ratingStars);

// document
//   .querySelector('.reviewForm')
//   .addEventListener('submit', reviewHandler);










// const reviewHandler = async (event) => {
//     console.log("CLICK!");
//     event.preventDefault();
//     // document.location.replace('/home');

//     // Collect values from the login form
//     const rating1 = document.querySelector('#rating1');
//     const rating2 = document.querySelector('#rating2');
//     const rating3 = document.querySelector('#rating3');
//     const rating4 = document.querySelector('#rating4');
//     const rating5 = document.querySelector('#rating5');
//     const comment = document.querySelector('#commentInput').value.trim();

//     if (rating1 && comment) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ rating1, comment }),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         console.log("111");
//       } else {
//         alert(response.statusText);
//       }
//     } else if (rating2 && comment) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ rating2, comment }),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         console.log("222");
//       } else {
//         alert(response.statusText);
//       }
//     } else if (rating3 && comment) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ rating3, comment }),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         console.log("333");
//       } else {
//         alert(response.statusText);
//       }
//     } else if (rating4 && comment) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ rating4, comment }),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         console.log("444");
//       } else {
//         alert(response.statusText);
//       }
//     } else if (rating5 && comment) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ rating5, comment }),
//         headers: { 'Content-Type': 'application/json' },
//       })

//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         console.log("555");
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

// document
//   .querySelector('.reviewForm')
//   .addEventListener('submit', reviewHandler);








// WEB API - AJAX call + functions to follow:
// declare API variables:
apiKey = "5ht1h6zfn446h3vl2t1a4n2p7";
const queryURL =
  "https://data.cityofchicago.org/resource/we8h-apcf.json" + apiKey;
const userSearch = "";
const myData = undefined;

// decalre variables based on html
const searchMuralBtn = $("mural-search-button");
const table = $(".table-section");
const searchInput = $("#search-input");
// save searches
// const table2 = $(".table-section2");
// const appendSearch = $(".search-wrapper");

// mural search:
const muralArray = [];
$("#mural-search-button").on("click", function (e) {
  e.preventDefault();
  $("#tablebody").empty();

  let callData = $("#search-input").val();

  $.ajax({
    url: `https://data.cityofchicago.org/resource/we8h-apcf.json?zip=${callData}`,

    type: "GET",
    data: {
      $limit: 5000,
      $$app_token: "wuWBoPJo0VvB887VUDjq8qYJ8",
    },
  }).done(function (data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    if (data.length === 0) {
      let noMuralOut = "Zip Code" + callData + "does not contain any murals";
      $("#tablebody").empty();
      $("#tablebody").append(noMuralOut);
    }
    // FOR any results, display as such:
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      muralArray.push(data[i]);

      let makeMuralOutput =
        "Mural Title: " +
        data[i].artwork_title +
        "<br>" +
        "Artist Name: " +
        data[i].artist_credit +
        "<br>" +
        "Installment Year: " +
        data[i].year_installed +
        "<br>" +
        "Address: " +
        data[i].street_address +
        " Chicago, IL           " +
        data[i].zip +
        "<br><br>";

      let html = `<tr><td> ${makeMuralOutput} </td></tr>`;
      $("#tablebody").append(html);
    }
  });
  // console.log(muralArray)
});

// module.exports = ?
