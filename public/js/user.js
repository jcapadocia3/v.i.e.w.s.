// WEB API - AJAX call + functions to follow:
// declare API variables:
apiKey = "5ht1h6zfn446h3vl2t1a4n2p7";
const queryURL =
  "https://data.cityofchicago.org/resource/we8h-apcf.json" + apiKey;
const userSearch = "";
const myData = undefined;

// declare variables based on html
const searchMuralBtn = $("mural-search-button");
const table = $(".table-section2");
const searchInput = $("#search-input1");

// mural search:
const muralArray = [];
$("#mural-search-button1").on("click", function (e) {
  e.preventDefault();
  $("#tablebody1").empty();

  let callData = $("#search-input1").val();

  $.ajax({
    url: `https://data.cityofchicago.org/resource/we8h-apcf.json?zip=${callData}`,

    type: "GET",
    data: {
      $limit: 5000,
      $$app_token: "wuWBoPJo0VvB887VUDjq8qYJ8",
    },
  }).done(function (data) {
    if (data.length === 0) {
      let noMuralOut =
        "zip code " + callData + " does not contain any murals :(";
      $("#tablebody1").empty();
      $("#tablebody1").append(noMuralOut);
      $(document).ready(function () {
        $("#myModal").on("show.bs.modal", function (event) {
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
      $("#tablebody1").append(html);
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
  $("#tablebody1").empty();

  let callData = $("#search-input1").val();
  // url set to 'artwork_title'
  $.ajax({
    url: `https://data.cityofchicago.org/resource/we8h-apcf.json?artwork_title=${callData}`,

    type: "GET",
    data: {
      $limit: 5000,
      $$app_token: "wuWBoPJo0VvB887VUDjq8qYJ8",
    },
  }).done(function (data) {
    // alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
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
      $("#tablebody1").append(html);
    }
  });
  console.log(muralArray);
});
