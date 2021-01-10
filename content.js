var pageNo=1;

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
function nextPage(){
	pageNo=(pageNo+1)
	refreshPage();
}
function previousPage(){
	if(pageNo<2)
		return;
	pageNo=(pageNo-1)
	refreshPage();
}
document.addEventListener("click", function(e){

	console.log(e.srcElement.attributes[0].nodeValue)
	if(e.target.nodeName=='A'){
		var win = window.open(e.srcElement.attributes[0].nodeValue, '_blank');
		if (win) 
			win.focus();

		return;
	}

	console.log(e)
	console.log(e.target.id)
	switch(e.target.id){
		case "nextPage" :
		nextPage();
		break;
		case "previousPage" :
		previousPage();
		break;
	}
});


refreshPage();
