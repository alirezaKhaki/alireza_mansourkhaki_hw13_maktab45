$(document).ready(() => {
    // $('.detail').html(`<p>hi</p>`)

    $.get("/", function(result) {

        var href = document.location.href;
        var lastPathSegment = href.substr(href.lastIndexOf('/') + 1)
        console.log(lastPathSegment);
        console.log(result);



        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BULDING PAGES
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

        for (let j = 0; j < 6; j++) {
            if (lastPathSegment.includes(j)) {
                function buildPage() {


                    $(".detail").append(`<div class="pages mt-3 col-12 col-md-6 col-lg-4">
                        <div class="card">
                            <img class="card-img-top" id="dvPreview" src="${result[j].avatar}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">id:${result[j].id} </h5>
                                <p class="card-text">email:${result[j].email} <span></span></p>
                                <p class="card-text">first name:${result[j].first_name} <span></span></p>
                                <p class="card-text">last name:${result[j].last_name} <span></span></p>
                            </div>
                        </div>
        
                    </div>`)



                }

                buildPage()
            }
        }

    })

})