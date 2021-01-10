chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    $.ajax({
        url: 'https://newsapi.org/v2/everything?q='+request.query+'&language=en&sortBy=publishedAt&pageSize=5&page='+request.pageNo,
        method: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer b3c327f79a694ec4b7fc4d6e4e8d876a');
        },
        success: function(data) {
            // data would be sent successfully
            sendResponse(data);
        },
        error: function(data){
          sendResponse(data);
      }
  });

    return true; // keeps the message channel open until `sendResponse` is executed
});
