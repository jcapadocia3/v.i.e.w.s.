// create a fx to have review body appear in matching mural id container
function parseUrl () {
  // takes current url
  const url = location.href;
  // snip snip
  const params = url.split('/');
  // if the url params pass, then please append the review left to the corresponding container
  return params == null ? 1 : params[params.length - 1];
}

const commentHandler = async (event) => {
  event.preventDefault()

  const comment = document.querySelector("#commentInput").value.trim();

  if (comment) {
    const id = parseUrl();
    // Send a POST request to the API endpoint
    const response = await fetch("/review", {
      method: "POST",
      // will append to the review container on the specified route (mural id and all)
      body: JSON.stringify({ review: comment, mural_id: id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      location.reload();
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
        "<br><br>" +
        `<img style="display=center src="$" width="200" height="300">` +
        "<br><br><br>";

      let html = `<tr><td> ${makeMuralOutput} </td></tr>`;
      $("#tablebody").append(html);
    }
  });
});

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
    // FOR any results, display as such:
    for (let i = 0; i < data.length; i++) {
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
        "<br><br>" +
        `<img style="display=center src="$" width="200" height="300">` +
        "<br><br><br>";

      let html = `<tr><td> ${makeTitleOutput} </td></tr>`;
      $("#tablebody").append(html);
    }
  });
});
