$(document).ready(() => {


    $.get("/", function(result) {


        console.log(result);



        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BULDING PAGES
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function buildPage() {
            for (let i = 0; i < result.length; i++) {

                $(".cards").append(`<div class="pages mt-3 col-12 col-md-6 col-lg-4">
                <div class="card">
                    <img class="card-img-top" id="dvPreview" src="${result[i].avatar}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">id:${result[i].id} </h5>
                        <p class="card-text">email:${result[i].email} <span></span></p>
                        <button  class="cardNo${i} btn btn-primary"><a href="cardDetail${i}.html" style="color:white;">More Detail</a></button>
                    </div>
                </div>

            </div>`)


            }
        }

        buildPage()

    })

})