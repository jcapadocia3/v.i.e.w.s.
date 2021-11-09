  // WEB API - AJAX call + functions to follow:
  // declare API variables:
  apiKey = "5ht1h6zfn446h3vl2t1a4n2p7";
  const queryURL =
    "https://data.cityofchicago.org/resource/we8h-apcf.json" + apiKey;
  const userSearch = "";
  const myData = undefined;
  
  // decalre variables based on html
  const searchMuralBtn = $("mural-search-button");
  const table = $(".table-section2");
  const searchInput = $("#search-input2");
  // save searches
  // const table2 = $(".table-section2");
  // const appendSearch = $(".search-wrapper");
  
  // mural search:
  const muralArray = [];
  $("#mural-search-button2").on("click", function (e) {
    e.preventDefault();
    $("#tablebody2").empty();
  
    let callData = $("#search-input2").val();
  
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
      $("#tablebody2").empty();
      $("#tablebody2").append(noMuralOut);
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
        $("#tablebody2").append(html);
      }
    });
    // console.log(muralArray)
  });