$("button").on("click", function (e) {
    e.preventDefault();
    var search = $("#formGroupExampleInput").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=LQGuEGsaG2zsbGWCNquvZrkxt1Xvn4Es"
console.log(queryURL)
console.log(search)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    var results = response.response.docs
    console.log(results);

    for(i=0; i<results.length; i++) {
        var webURL = $("<div>").text(results[i].web_url)
        console.log(webURL.results)
        $("#article").prepend(webURL)
    }
})
})

