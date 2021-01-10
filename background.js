chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    $.ajax({
        url: 'https://newsapi.org/v2/everything?q=ransomware&language=en&pageSize=5&page='+request.pageNo,
        method: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer 8de946b14433428eb8ed38407ff95006');
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
