// // image upload - npm cloudinary
// const cloudinaryAPI = 'https://api.cloudinary.com/v1_1/dqjpkb3xf/mh/upload';
// const cloudinaryUploadPreset = 'wk3fcptv/mh/upload';
// // const imgPreview = document.getElementById('')

// const url = cloudinaryAPI;
// const options = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8'
//   },
//   body: JSON.stringify({
//     a: 10,
//     b: 20
//   })
// };

// fetch(url, options)
//   .then(response => {
//     console.log(response.status);
//   });

// // cloudinary.uploader.upload_stream(
// //   { agent: myAgent },
// //   function(error, result) { console.log(result); }
// // );



const commentHandler = async (event) => {
  console.log("raddddddd!");
  // debugger;
  event.preventDefault()
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

// the array the WEB API will appened into
const muralArray = [];

// handler for mural zip codes:
document.querySelector(".commentSubmit").addEventListener("click", commentHandler);

// mural search by zip:
$("#mural-search-button").on("click", function (e) {
  e.preventDefault();
  $("#tablebody").empty();

  let callData = $("#search-input").val();
  // url set to 'zip'
  $.ajax({
    url: `https://data.cityofchicago.org/resource/we8h-apcf.json?zip=${callData}`,

    type: "GET",
    data: {
      $limit: 5000,
      $$app_token: "wuWBoPJo0VvB887VUDjq8qYJ8",
    },
  })
  .done(function (data) {
    // alert("Retrieved " + data.length + " records from the dataset!");
    // console.log(data);
    `<div id="myModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Mural Results</h5>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <!-- Content will be loaded here from "remote.php" file -->
          <p> we found {{data.length}} records from the dataset</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
  if (data.length === 0) {
    let noMuralOut = "zip code " + callData + " does not contain any murals :(";
    $("#tablebody").empty();
    $("#tablebody").append(noMuralOut);
    $(document).ready(function(){
      $("#myModal").on("show.bs.modal", function(event){
        // Place the returned HTML into the selected element
        $(this).find(".modal-body");
      });
    });
  }
    // FOR any results, display as such:
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      muralArray.push(data[i]);

      let makeMuralOutput =
        `<span class="muralStuff">Mural Title: </span>` +
        data[i].artwork_title +
        "<br>" +
        `<span class="muralStuff">Artist Name: </span>` +
        data[i].artist_credit +
        "<br>" +
        `<span class="muralStuff">Installment Year: </span>` +
        data[i].year_installed +
        "<br>" +
        `<span class="muralStuff">Address: </span>` +
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

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// handler for mural title:
// document.querySelector(".").addEventListener("click", commentHandler);

// mural search by title:
$("#mural-title-button").on("click", function (e) {
  e.preventDefault();
  $("#tablebody").empty();

  let callData = $("#search-input").val();
  // url set to 'artwork_title'
  $.ajax({
    url: `https://data.cityofchicago.org/resource/we8h-apcf.json?artwork_title=${callData}`,

    type: "GET",
    data: {
      $limit: 5000,
      $$app_token: "wuWBoPJo0VvB887VUDjq8qYJ8",
    },
  })
  .done(function (data) {
    // alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    if (data.length === 0) {
    //   let noMuralOut = "Zip Code" + callData + "does not contain any murals";
    //   $("#tablebody").empty();
    //   $("#tablebody").append(noMuralOut);
    $(document).ready(function(){
      // $("#myModal").on("show.bs.modal", function(event){
      //   // Place the returned HTML into the selected element
      //   $(this).find(".modal-body");
      // });
    });
  }
    // FOR any results, display as such:
    for (let i = 0; i < data.length; i++) {
      //   console.log(data[i]);
      muralArray.push(data[i]);

      let makeTitleOutput =
        `<span class="muralStuff">Mural Title: </span>` +
        data[i].artwork_title +
        "<br>" +
        `<span class="muralStuff">Artist Name: </span>` +
        data[i].artist_credit +
        "<br>" +
        `<span class="muralStuff">Installment Year: </span>` +
        data[i].year_installed +
        "<br>" +
        `<span class="muralStuff">Address: </span>` +
        data[i].street_address +
        " Chicago, IL           " +
        data[i].zip +
        "<br><br>";

      let html = `<tr><td> ${makeTitleOutput} </td></tr>`;
      $("#tablebody").append(html);
    }
  });
  console.log(muralArray)
});
