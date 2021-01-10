var pageNo=8;

function refreshPage(){

	chrome.runtime.sendMessage({type: "getUrls", pageNo:pageNo}, function(response) {

		$("#pageNumber").html(pageNo)

		console.log("Sent Something")
		console.log(response)

		$("#feed").empty()

		for(var k in response.articles){
			list_item="<span class='parss-title'><a href='"+response.articles[k].url+"'>"+response.articles[k].title+"</a></span>";
			list_item+="<span class='parss-date'>"+response.articles[k].publishedAt+"</span>"
			list_item+="<span class='parss-image'><img width='60px' height='60px' src='"+response.articles[k].urlToImage+"'></img></span>"
			list_item+="<span class='parss-description'>"+response.articles[k].description+"</span>"

			$("#feed").append("<li>"+list_item+"</li>")
		}

	});
}

document.addEventListener("click", function(e){
	console.log(e)
	console.log(e.target.id)
	switch(e.target.id){
		case "nextPage" :
			pageNo=(pageNo+1)
			refreshPage();
		break;

		case "previousPage" :
			pageNo=(pageNo-1)
			refreshPage();
		break;
	}
});


refreshPage();
